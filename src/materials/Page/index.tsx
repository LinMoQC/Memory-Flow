import { ComponentConfig } from "../../pages/editor/stores/component-config";
import PageDev from "./dev";
import PageProd from "./prod";

export const PageConfig: ComponentConfig = {
    name: 'Page',
    defaultProps: {},
    dev: PageDev,
    prod: PageProd,
    desc: '页面',
    materialType: 'area'
}