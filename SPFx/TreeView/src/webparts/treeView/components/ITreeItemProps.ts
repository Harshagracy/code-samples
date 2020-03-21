import { IIconProps, IContextualMenuItem } from "office-ui-fabric-react";

export interface ITreeItemProps {
    iconProps?: IIconProps;
    disabled?: boolean;
    data?: any;
    key: string;
    label: string;
    subLabel?: string;
    actions?: IContextualMenuItem[];
}