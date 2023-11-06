export type Settings = {
    key?: {
        headerText?: string;
        width?: string;
    };
    value?: {
        headerText?: string;
        width?: string;
    };
    options?: {
        add?: boolean;
        edit?: {
            key?: boolean;
            value?: boolean;
        };
        delete?: boolean;
    };
    sortable?: boolean;
    sortDirection?: SortType;
    expandAll?: boolean;
    loadFromFile?: boolean;
    iconPackage?: 'basic' | 'font-awesome' | 'material-design';
    icons?: Icons;
};
export type Icons = {
    notSorted?: Icon;
    sortedAsc?: Icon;
    sortedDesc?: Icon;
    expand?: Icon;
    collapse?: Icon;
    simpleChild?: Icon;
    addChild?: Icon;
    editChild?: Icon;
    confirmEditChild?: Icon;
    cancelEditChild?: Icon;
    deleteChild?: Icon;
    uploadFile?: Icon;
};
export type Icon = {
    innerText?: string;
    class?: string;
    color?: string;
    html?: string;
};
export type SortType = 'asc' | 'desc';
export type IconsPackages = {
    [name: string]: Icons;
};
export declare const iconsPackages: IconsPackages;
