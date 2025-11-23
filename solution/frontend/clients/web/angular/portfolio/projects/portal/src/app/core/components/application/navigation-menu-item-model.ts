/**
 * Represents navigation menu item model
 */
export interface NavigationMenuItemModel {
    /**
     * Item id
     */
    id: number;

    /**
     * Item value
     *
     * Normally, this is router component name
     */
    value: string;

    /**
     * Item display value
     *
     * Normally, this is i18n translation string
     */
    displayValue: string;
}
