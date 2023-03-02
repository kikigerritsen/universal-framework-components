

export enum colorScheme {
    PRIMARY = "#ffe000",
    PRIMARY_LIGHTER = "#ffef80",
    SECONDARY = "#232323",
    SECONDARY_LIGHTER = "#919191",
    TERTIARY = "#ffffff",
    TERTIARY_LIGHTER = "#e3e3e3",
}
export const theme = {
    colors: {
        PRIMARY_BASE_COLOR: colorScheme.PRIMARY,
        SECONDARY_BASE_COLOR: colorScheme.SECONDARY,
        TERTIARY_BASE_COLOR: colorScheme.TERTIARY,
        ROCKSTARS_DARK: colorScheme.SECONDARY,
        ROCKSTARS_DARK_I: "#919191",
        ROCKSTARS_LIGHT: colorScheme.TERTIARY,
    },
    shades: {
        PRIMARY_LIGHTER: colorScheme.PRIMARY_LIGHTER,
        SECONDARY_LIGHTER: colorScheme.SECONDARY_LIGHTER,
        TERTIARY_LIGHTER: colorScheme.TERTIARY_LIGHTER,
    }
}