import { create } from "zustand";
import { ComponentSetter } from "./componentes";
import { ContainerConfig } from "../../../materials/Container";
import { ButtonConfig } from "../../../materials/Button";
import { PageConfig } from "../../../materials/Page";
import { ModalConfig } from "../../../materials/Modal";
import { TableConfig } from "../../../materials/Table";
import { TableColumnConfig } from "../../../materials/TableColumn";
import { FormConfig } from "../../../materials/Form";
import { FormItemConfig } from "../../../materials/FormItem";
import { FlexContainerConfig } from "../../../materials/FlexContainer";
import { FlexItemConfig } from "../../../materials/FlexItem";

// 物料类型
export type MaterialType = 'unit' | 'area' | 'special'

export interface ComponentConfig {
    name: string;
    defaultProps: Record<string, any>;
    setter?: ComponentSetter[]
    desc: string;
    stylesSetter?: ComponentSetter[];
    dev: any;
    prod: any;
    events?: ComponentEvent[]
    methods?: ComponentMethod[],
    materialType: MaterialType,
}

// 组件事件
export interface ComponentEvent {
    name: string;
    label: string
}

export interface ComponentMethod {
    name: string;
    label: string
}

interface State {
    componentConfig: { [key: string]: ComponentConfig }
}

interface Action {
    registerComponent: (name: string, componentConfig: ComponentConfig) => void;
}

export const useComponentConfigStore = create<State & Action>((set) => ({
    componentConfig: {
        Container: ContainerConfig,
        Button: ButtonConfig,
        Page: PageConfig,
        Modal: ModalConfig,
        Table: TableConfig,
        TableColumn: TableColumnConfig,
        Form: FormConfig,
        FormItem: FormItemConfig,
        FlexContainer: FlexContainerConfig,
        FlexItem: FlexItemConfig
    },
    registerComponent: (name, componentConfig) => set((state) => {
        return {
            ...state,
            componentConfig: {
                ...state.componentConfig,
                [name]: componentConfig
            }
        }
    })
}));