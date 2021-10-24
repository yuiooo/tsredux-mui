export interface GridPaginationSettings {
    pagination: true | undefined;
    autoPageSize: boolean;
    pageSize: number | undefined;
}

export interface GridToolbarContainerProps {
    /* eslint no-unused-vars: 0 */
    onApply: (options: GridConfigOptions) => void;
    size: number;
    type: GridDataType;
    theme: GridDataThemeOption;
}

export type GridDataType = 'Employee' | 'Commodity';

export type GridDataThemeOption = 'default' | 'ant';

export interface GridConfigOptions {
    size: number;
    type: GridDataType;
    pagesize: number;
    theme: GridDataThemeOption;
}

export interface IAttributeTableProps {

}