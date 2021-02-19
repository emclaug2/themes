/**
 Copyright (c) 2020-present, Eaton

 All rights reserved.

 This code is licensed under the BSD-3 license found in the LICENSE file in the root directory of this source tree and at https://opensource.org/licenses/BSD-3-Clause.
 **/

import { typography, createSimpleDarkPalette as createSimplePalette } from './shared';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';
import Color from 'color';
import * as ThemeColors from '@pxblue/colors';

/*
 *  When using the fade() function to set opacity, the fade functions subtracts the value passed as an argument.
 *  So fade(.60) = opacity 40%
 */

export const blueDarkTheme: ThemeOptions = {
    direction: 'ltr',
    typography: typography,
    palette: {
        type: 'dark',
        primary: createSimplePalette(ThemeColors.blue),
        secondary: createSimplePalette(ThemeColors.lightBlue),
        error: createSimplePalette(ThemeColors.red),
        success: createSimplePalette(ThemeColors.green),
        info: createSimplePalette(ThemeColors.lightBlue),
        divider: Color(ThemeColors.black[200]).alpha(0.32).rgb().string(),
        warning: {
            light: ThemeColors.yellow[100],
            main: ThemeColors.yellow[300],
            dark: ThemeColors.yellow[900],
        },
        background: {
            default: ThemeColors.darkBlack[800],
            paper: ThemeColors.black[900],
        },
        text: {
            primary: ThemeColors.black[50],
            secondary: ThemeColors.black[200],
            disabled: Color(ThemeColors.black[300]).alpha(0.32).rgb().string(),
            hint: Color(ThemeColors.black[300]).alpha(0.32).rgb().string(),
        },
        action: {
            hover: Color(ThemeColors.black[50]).alpha(0.1).rgb().string(),
            active: ThemeColors.black[200],
            disabledBackground: Color(ThemeColors.black[200]).alpha(0.24).rgb().string(),
        },
    },

    overrides: {
        // AVATAR OVERRIDES
        MuiAvatar: {
            colorDefault: {
                backgroundColor: Color(ThemeColors.black[50]).alpha(0.1).rgb().string(),
                color: ThemeColors.black[50],
            },
        },

        // APP BAR OVERRIDES
        MuiAppBar: {
            colorDefault: {
                color: ThemeColors.black[50],
                backgroundColor: ThemeColors.darkBlack[100],
            },
            colorPrimary: {
                color: ThemeColors.black[50],
                backgroundColor: ThemeColors.black[800],
            },
            colorSecondary: {
                color: ThemeColors.black[50],
                backgroundColor: ThemeColors.black[900],
            },
        },

        // BACKDROP OVERRIDES
        MuiBackdrop: {
            root: {
                backgroundColor: Color(ThemeColors.darkBlack[900]).alpha(0.7).rgb().string(),
            },
        },

        // BADGE OVERRIDES
        MuiBadge: {
            colorError: {
                backgroundColor: ThemeColors.red[500],
                color: ThemeColors.white[50],
            },
        },

        // BOTTOM NAVIGATION OVERRIDES
        MuiBottomNavigation: {
            root: {
                backgroundColor: ThemeColors.black[800],
            },
        },
        MuiBottomNavigationAction: {
            root: {
                '&$selected': {
                    '& $label': {
                        fontSize: '0.75rem',
                        fontWeight: 600,
                    },
                },
            },
            selected: {},
            label: {},
        },

        // BUTTON OVERRIDES
        MuiButton: {
            root: {
                textTransform: 'none',
            },
            outlined: {
                borderColor: ThemeColors.black[100],
            },
            // outlinedPrimary: {
            //     borderColor: ThemeColors.blue[500],
            // },
            // outlinedSecondary: {
            //     borderColor: ThemeColors.blue[200],
            // },
            contained: {
                backgroundColor: ThemeColors.black[500],
                color: ThemeColors.white[50],
                '&:hover': {
                    backgroundColor: ThemeColors.black[300],
                },
            },
            containedPrimary: {
                backgroundColor: ThemeColors.blue[500],
                color: ThemeColors.white[50],
                '&:hover': {
                    backgroundColor: ThemeColors.blue[700],
                },
                '&$disabled': {
                    color: Color(ThemeColors.black[200]).alpha(0.24).rgb().string(),
                },
            },
            disabled: {},
        },

        // CHIP OVERRIDES
        MuiChip: {
            root: {
                fontSize: '0.875rem',
                backgroundColor: ThemeColors.black[500],
                color: ThemeColors.black[50],
                '& $avatar': {
                    color: ThemeColors.white[50],
                },
            },
            clickable: {
                '&:hover': {
                    backgroundColor: ThemeColors.black[400],
                },
            },
            deleteIcon: {
                color: ThemeColors.black[200],
                '&:hover': {
                    color: ThemeColors.black[50],
                },
            },
            deleteIconColorPrimary: {
                color: ThemeColors.blue[100],
                '&:hover': {
                    color: ThemeColors.white[50],
                },
            },
            deleteIconOutlinedColorPrimary: {
                color: ThemeColors.blue[400],
                '&:hover': {
                    color: ThemeColors.blue[200],
                },
            },
            colorPrimary: {
                color: ThemeColors.white[50],
                backgroundColor: ThemeColors.blue[500],
                '&$clickable:hover': {
                    backgroundColor: ThemeColors.blue[300],
                },
            },
            outlined: {
                backgroundColor: ThemeColors.black[900],
                borderColor: Color(ThemeColors.black[200]).alpha(0.32).rgb().string(),
                '&$clickable:hover': {
                    backgroundColor: ThemeColors.black[800],
                },
            },
            outlinedPrimary: {
                backgroundColor: Color(ThemeColors.blue[500]).alpha(0.2).rgb().string(),
                '&$clickable:hover': {
                    backgroundColor: Color(ThemeColors.blue[500]).alpha(0.3).rgb().string(),
                },
            },
            avatar: {},
        },

        // DRAWER OVERRIDES
        MuiDrawer: {
            paper: {
                backgroundColor: ThemeColors.darkBlack[500],
            },
            paperAnchorBottom: {
                backgroundColor: ThemeColors.black[900],
            },
        },

        // FAB OVERRIDES
        MuiFab: {
            root: {
                textTransform: 'none',
                backgroundColor: ThemeColors.black[500],
                color: ThemeColors.white[50],
                '&:hover': {
                    backgroundColor: ThemeColors.black[300],
                },
            },
            primary: {
                backgroundColor: ThemeColors.blue[500],
                color: ThemeColors.white[50],
                '&:hover': {
                    backgroundColor: ThemeColors.blue[700],
                },
            },
        },

        //LIST ITEM OVERRIDES (plus nav drawer)
        MuiListItem: {
            root: {
                color: ThemeColors.black[50],
            },
        },

        // SNACKBAR OVERRIDES
        MuiSnackbarContent: {
            root: {
                // backgroundColor: ThemeColors.black[900],
                color: ThemeColors.black[500],
                '& .MuiButton-textPrimary': {
                    color: ThemeColors.blue[500],
                },
            },
        },

        // SLIDER OVERRIDES
        MuiSlider: {
            root: {
                height: 6,
                color: ThemeColors.blue[300],
            },
            track: {
                height: 6,
                marginTop: -1,
            },
            rail: {
                height: 4,
                backgroundColor: ThemeColors.black[300],
            },
            thumb: {
                height: 20,
                width: 20,
                marginTop: -8,
                backgroundColor: ThemeColors.blue[200],
            },
            thumbColorSecondary: {
                backgroundColor: ThemeColors.lightBlue[200],
            },
            mark: {
                backgroundColor: ThemeColors.blue[500],
                marginTop: 1,
            },
            markActive: {
                backgroundColor: ThemeColors.blue[500],
            },
        },

        // STEPPER OVERRIDES
        MuiStepper: {},
        MuiStepConnector: {
            line: {
                borderColor: Color(ThemeColors.black[200]).alpha(0.32).rgb().string(),
            },
        },
        MuiStep: {
            completed: {
                // Place a white background behind the icons so that the checks will not be see-through
                '& .MuiStepLabel-iconContainer:before': {
                    content: '""',
                    position: 'absolute',
                    display: 'block',
                    top: '5%',
                    right: '5%',
                    bottom: '5%',
                    left: '5%',
                    backgroundColor: ThemeColors.white[50],
                    borderRadius: '50%',
                },
            },
        },
        MuiStepIcon: {
            root: {
                color: Color(ThemeColors.black[300]).alpha(0.32).rgb().string(),
                zIndex: 1,
                '&$active': {
                    color: ThemeColors.blue[500],
                },
                '&$completed': {
                    color: ThemeColors.blue[500],
                },
            },
            text: {
                fill: ThemeColors.black[300],
            },
            active: {
                '& $text': {
                    fill: ThemeColors.white[50],
                },
            },
            completed: {},
        },
        MuiStepLabel: {
            label: {
                color: ThemeColors.black[200],
                '&$active': {
                    fontWeight: 600,
                    color: ThemeColors.blue[200],
                },
                '&$completed': {
                    fontWeight: 600,
                },
            },
            iconContainer: {
                position: 'relative',
            },
            active: {},
            completed: {},
        },

        // SWITCH OVERRIDES
        MuiSwitch: {
            switchBase: {
                color: ThemeColors.black[50],
                '&$checked + $track': {
                    opacity: 0.5,
                },
            },
            colorPrimary: {
                '&$checked': {
                    color: ThemeColors.blue[200],
                },
            },
            track: {
                backgroundColor: ThemeColors.black[300],
                opacity: 0.36,
            },
            checked: {},
        },

        // TABLE OVERRIDES
        MuiTableCell: {
            head: {
                fontWeight: 600,
            },
        },
        MuiTableHead: {
            root: {
                background: ThemeColors.black[900],
            },
        },
        MuiTableRow: {
            root: {
                color: ThemeColors.black[50],
                backgroundColor: ThemeColors.darkBlack[300],
                '&$hover:hover': {
                    backgroundColor: Color(ThemeColors.darkBlack[300]).mix(Color(ThemeColors.black[500]), 0.5).rgb().string(),
                },
                '&:nth-of-type(odd):not($selected)': {
                    backgroundColor: ThemeColors.black[900],
                    '&$hover:hover': {
                        backgroundColor: Color(ThemeColors.black[900]).mix(Color(ThemeColors.black[500]), 0.5).rgb().string(),
                    },
                },
                '&$selected': {
                    backgroundColor: Color(ThemeColors.blue[500]).alpha(0.2).rgb().string(),
                    '&$hover:hover': {
                        backgroundColor: Color(ThemeColors.blue[500]).mix(Color(ThemeColors.black[500]), 0.5).alpha(0.2).rgb().string(),
                    },
                },
            },
            hover: {},
        },
        MuiTableSortLabel: {
            root: {
                '&:hover': {
                    color: ThemeColors.black[50],
                    '& $icon': {
                        color: ThemeColors.black[200],
                        opacity: 1,
                    },
                },
            },
            icon: {
                opacity: 0.36,
            },
        },

        // TABS OVERRIDES
        MuiTab: {
            textColorInherit: {
                color: ThemeColors.black[200],
                opacity: 1,
                '&$selected': {
                    color: ThemeColors.blue[200],
                },
            },
            selected: {},
        },
        MuiTabs: {
            root: {
                color: ThemeColors.black[200],
            },
            indicator: {
                backgroundColor: ThemeColors.blue[200],
            },
        },

        // TOGGLE BUTTON OVERRIDES (LAB)
        // @ts-ignore
        MuiToggleButtonGroup: {
            root: {
                backgroundColor: ThemeColors.black[900],
            },
            groupedHorizontal: {
                '&:not(:first-child)': {
                    marginLeft: 0,
                },
            },
            groupedVertical: {
                '&:not(:first-child)': {
                    marginTop: 0,
                },
            },
        },
        // @ts-ignore
        MuiToggleButton: {
            root: {
                backgroundColor: ThemeColors.black[900],
                color: ThemeColors.gray[500],
                borderColor: Color(ThemeColors.black[200]).alpha(0.32).rgb().string(),
                '&$selected': {
                    backgroundColor: Color(ThemeColors.blue[500]).alpha(0.2).rgb().string(),
                    color: ThemeColors.blue[200],
                },
            },
            selected: {},
        },
    },
};
