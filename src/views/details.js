//@ts-check
import { html } from '../../node_modules/lit-html/lit-html.js';
import { getItemsById, deleteItem } from '../api/data.js';

const detailsTemplate = (item, isOwner, onDelete) => html`
    <section id="listing-details">
        <h1>Details</h1>
        <div class="details-info">
            <img src=${item.imageUrl} />
            <hr />
            <ul class="listing-props">
                <li><span>Brand:</span>${item.brand}</li>
                <li><span>Model:</span>${item.model}</li>
                <li><span>Year:</span>${item.year}</li>
                <li><span>Price:</span>${item.price}$</li>
            </ul>

            <p class="description-para">${item.description}</p>

            ${isOwner
                ? html`
                      <div class="listings-buttons">
                          <a href="/edit/${item._id}" class="button-list">Edit</a>
                          <a href="javascript:void(0)" @click=${onDelete} class="button-list"
                              >Delete</a
                          >
                      </div>
                  `
                : ''}
        </div>
    </section>
`;

export async function detailsPage(ctx) {
    const userId = sessionStorage.getItem('userId');
    const itemId = ctx.params.id;
    const item = await getItemsById(itemId);

    const isOwner = userId === item._ownerId;
    ctx.render(detailsTemplate(item, isOwner, onDelete));

    async function onDelete() {
        const confirmed = confirm('Are you sure!');

        if (confirmed) {
            await deleteItem(itemId);
            ctx.page.redirect('/catalog');
        }
    }
}
