import { tableRender } from "./tableView.js";
import { getGoods, deleteProduct } from "./serviceAPI.js";
import { modalController } from "./modalController.js";
import { modal, tableGoods } from "./elems.js";

export const tableController = async () => {
  modalController({
    delegation: {
      parent: tableGoods,
      target: ".table-goods-item",
      targetExclude: ".btn-delete",
    },
  });

  tableGoods.addEventListener("click", async ({ target }) => {
    const delBtn = target.closest(".btn-delete");
    if (delBtn) {
      const row = delBtn.closest(".table-goods-item");
      const isDel = await deleteProduct(row.dataset.id);
      if (isDel) {
        row.remove();
      }
    }
  });

  const goods = await getGoods();
  tableRender(goods);
};
