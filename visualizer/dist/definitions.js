"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pickers = exports["default"] = exports.decorations = exports.core = void 0;
var core = {
  "@material-ui/core/Accordion": {
    group: "@material-ui/core",
    description: "MuiAccordion",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        defaultExpanded: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disabled: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        expanded: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        onChange: {
          type: "func",
          uid: "func_001",
          required: false
        },
        square: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        TransitionComponent: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        TransitionProps: {
          type: "object",
          uid: "object_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/AccordionActions": {
    group: "@material-ui/core",
    description: "MuiAccordionActions",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        disableSpacing: {
          type: "bool",
          uid: "bool_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/AccordionDetails": {
    group: "@material-ui/core",
    description: "MuiAccordionDetails",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/AccordionSummary": {
    group: "@material-ui/core",
    description: "MuiAccordionSummary",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        expandIcon: {
          type: "node",
          uid: "node_001",
          required: false
        },
        focusVisibleClassName: {
          type: "string",
          uid: "string_001",
          required: false
        },
        IconButtonProps: {
          type: "object",
          uid: "object_001",
          required: false
        },
        onClick: {
          type: "func",
          uid: "func_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/AppBar": {
    group: "@material-ui/core",
    description: "MuiAppBar",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        color: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["default", "inherit", "primary", "secondary", "transparent"],
          required: false
        },
        position: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["absolute", "fixed", "relative", "static", "sticky"],
          required: false
        }
      }
    },
    defaultProps: {
      position: "static"
    }
  },
  "@material-ui/core/Avatar": {
    group: "@material-ui/core",
    description: "MuiAvatar",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        alt: {
          type: "string",
          uid: "string_001",
          required: false
        },
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        component: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        imgProps: {
          type: "object",
          uid: "object_001",
          required: false
        },
        sizes: {
          type: "string",
          uid: "string_001",
          required: false
        },
        src: {
          type: "string",
          uid: "string_001",
          required: false
        },
        srcSet: {
          type: "string",
          uid: "string_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/Backdrop": {
    group: "@material-ui/core",
    description: "MuiBackdrop",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        invisible: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        open: {
          type: "bool",
          uid: "bool_001",
          required: true
        },
        transitionDuration: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "shape",
            uid: "shape_002",
            options: {
              appear: {
                type: "number",
                uid: "number_001",
                required: false
              },
              enter: {
                type: "number",
                uid: "number_001",
                required: false
              },
              exit: {
                type: "number",
                uid: "number_001",
                required: false
              }
            },
            required: false
          }],
          required: false
        }
      }
    },
    defaultProps: {
      style: {
        zIndex: 1199,
        flexDirection: "column"
      }
    }
  },
  "@material-ui/core/Badge": {
    group: "@material-ui/core",
    description: "MuiBadge",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        anchorOrigin: {
          type: "shape",
          uid: "shape_001",
          options: {
            horizontal: {
              type: "oneOf",
              uid: "oneOf_001",
              options: ["left", "right"],
              required: true
            },
            vertical: {
              type: "oneOf",
              uid: "oneOf_001",
              options: ["bottom", "top"],
              required: true
            }
          },
          required: false
        },
        badgeContent: {
          type: "node",
          uid: "node_001",
          required: false
        },
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        color: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["default", "error", "primary", "secondary"],
          required: false
        },
        component: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        invisible: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        max: {
          type: "number",
          uid: "number_001",
          required: false
        },
        showZero: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        variant: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["dot", "standard"],
          required: false
        }
      }
    }
  },
  "@material-ui/core/BottomNavigation": {
    group: "@material-ui/core",
    description: "MuiBottomNavigation",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        component: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        onChange: {
          type: "func",
          uid: "func_001",
          required: false
        },
        showLabels: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        value: {
          type: "any",
          uid: "any_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/BottomNavigationAction": {
    group: "@material-ui/core",
    description: "MuiBottomNavigationAction",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        icon: {
          type: "node",
          uid: "node_001",
          required: false
        },
        label: {
          type: "node",
          uid: "node_001",
          required: false
        },
        onChange: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onClick: {
          type: "func",
          uid: "func_001",
          required: false
        },
        selected: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        showLabel: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        value: {
          type: "any",
          uid: "any_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/Box": {
    group: "@material-ui/core",
    description: "MuiBox",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "node",
            uid: "node_001",
            required: false
          }, {
            type: "func",
            uid: "func_002",
            required: false
          }],
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        component: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        border: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        borderTop: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        borderRight: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        borderBottom: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        borderLeft: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        borderColor: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        borderRadius: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        displayPrint: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        display: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        overflow: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        textOverflow: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        visibility: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        whiteSpace: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        flexBasis: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        flexDirection: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        flexWrap: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        justifyContent: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        alignItems: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        alignContent: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        order: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        flex: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        flexGrow: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        flexShrink: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        alignSelf: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        justifyItems: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        justifySelf: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        gridGap: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        gridColumnGap: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        gridRowGap: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        gridColumn: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        gridRow: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        gridAutoFlow: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        gridAutoColumns: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        gridAutoRows: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        gridTemplateColumns: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        gridTemplateRows: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        gridTemplateAreas: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        gridArea: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        position: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        zIndex: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        top: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        right: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        bottom: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        left: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        color: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        bgcolor: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        boxShadow: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        width: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        maxWidth: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        minWidth: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        height: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        maxHeight: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        minHeight: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        boxSizing: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        m: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        mt: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        mr: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        mb: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        ml: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        mx: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        my: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        p: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        pt: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        pr: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        pb: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        pl: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        px: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        py: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        margin: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        marginTop: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        marginRight: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        marginBottom: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        marginLeft: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        marginX: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        marginY: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        padding: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        paddingTop: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        paddingRight: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        paddingBottom: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        paddingLeft: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        paddingX: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        paddingY: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        fontFamily: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        fontSize: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        fontStyle: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        fontWeight: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        letterSpacing: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        lineHeight: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        textAlign: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }, {
            type: "object",
            uid: "object_003",
            required: false
          }, {
            type: "array",
            uid: "array_004",
            required: false
          }],
          required: false
        },
        sx: {
          type: "object",
          uid: "object_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/Breadcrumbs": {
    group: "@material-ui/core",
    description: "MuiBreadcrumbs",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        component: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        expandText: {
          type: "string",
          uid: "string_001",
          required: false
        },
        itemsAfterCollapse: {
          type: "number",
          uid: "number_001",
          required: false
        },
        itemsBeforeCollapse: {
          type: "number",
          uid: "number_001",
          required: false
        },
        maxItems: {
          type: "number",
          uid: "number_001",
          required: false
        },
        separator: {
          type: "node",
          uid: "node_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/Button": {
    group: "@material-ui/core",
    description: "MuiButton",
    propTypes: {
      options: {
        onClick: {
          type: "func",
          uid: "func_001",
          required: false
        },
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        color: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["default", "inherit", "primary", "secondary"],
          required: false
        },
        component: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        disabled: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disableElevation: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disableFocusRipple: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disableRipple: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        endIcon: {
          type: "node",
          uid: "node_001",
          required: false
        },
        focusVisibleClassName: {
          type: "string",
          uid: "string_001",
          required: false
        },
        fullWidth: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        href: {
          type: "string",
          uid: "string_001",
          required: false
        },
        size: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["large", "medium", "small"],
          required: false
        },
        startIcon: {
          type: "node",
          uid: "node_001",
          required: false
        },
        type: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "oneOf",
            uid: "oneOf_001",
            options: ["button", "reset", "submit"],
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }],
          required: false
        },
        variant: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["contained", "outlined", "text"],
          required: false
        }
      },
      uid: "base",
      type: "exact",
      required: false
    }
  },
  "@material-ui/core/ButtonGroup": {
    group: "@material-ui/core",
    description: "MuiButtonGroup",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        color: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["default", "inherit", "primary", "secondary"],
          required: false
        },
        component: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        disabled: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disableElevation: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disableFocusRipple: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disableRipple: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        fullWidth: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        orientation: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["horizontal", "vertical"],
          required: false
        },
        size: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["large", "medium", "small"],
          required: false
        },
        variant: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["contained", "outlined", "text"],
          required: false
        }
      }
    }
  },
  "@material-ui/core/Card": {
    group: "@material-ui/core",
    description: "MuiCard",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        raised: {
          type: "bool",
          uid: "bool_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/CardActionArea": {
    group: "@material-ui/core",
    description: "MuiCardActionArea",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        focusVisibleClassName: {
          type: "string",
          uid: "string_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/CardActions": {
    group: "@material-ui/core",
    description: "MuiCardActions",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        disableSpacing: {
          type: "bool",
          uid: "bool_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/CardContent": {
    group: "@material-ui/core",
    description: "MuiCardContent",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        component: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/CardHeader": {
    group: "@material-ui/core",
    description: "MuiCardHeader",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        action: {
          type: "node",
          uid: "node_001",
          required: false
        },
        avatar: {
          type: "node",
          uid: "node_001",
          required: false
        },
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        component: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        disableTypography: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        subheader: {
          type: "node",
          uid: "node_001",
          required: false
        },
        subheaderTypographyProps: {
          type: "object",
          uid: "object_001",
          required: false
        },
        title: {
          type: "node",
          uid: "node_001",
          required: false
        },
        titleTypographyProps: {
          type: "object",
          uid: "object_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/CardMedia": {
    group: "@material-ui/core",
    description: "MuiCardMedia",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        component: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        image: {
          type: "string",
          uid: "string_001",
          required: false
        },
        src: {
          type: "string",
          uid: "string_001",
          required: false
        },
        style: {
          type: "object",
          uid: "object_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/Checkbox": {
    group: "@material-ui/core",
    description: "MuiCheckbox",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        checked: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        checkedIcon: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        color: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["default", "primary", "secondary"],
          required: false
        },
        disabled: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disableRipple: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        icon: {
          type: "node",
          uid: "node_001",
          required: false
        },
        id: {
          type: "string",
          uid: "string_001",
          required: false
        },
        indeterminate: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        indeterminateIcon: {
          type: "node",
          uid: "node_001",
          required: false
        },
        inputProps: {
          type: "object",
          uid: "object_001",
          required: false
        },
        inputRef: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "func",
            uid: "func_001",
            required: false
          }, {
            type: "object",
            uid: "object_002",
            required: false
          }],
          required: false
        },
        onChange: {
          type: "func",
          uid: "func_001",
          required: false
        },
        required: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        size: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["medium", "small"],
          required: false
        },
        value: {
          type: "any",
          uid: "any_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/Chip": {
    group: "@material-ui/core",
    description: "MuiChip",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        avatar: {
          type: "element",
          uid: "element_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        clickable: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        color: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["default", "primary", "secondary"],
          required: false
        },
        component: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        deleteIcon: {
          type: "element",
          uid: "element_001",
          required: false
        },
        disabled: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        icon: {
          type: "element",
          uid: "element_001",
          required: false
        },
        label: {
          type: "node",
          uid: "node_001",
          required: false
        },
        onClick: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onDelete: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onKeyDown: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onKeyUp: {
          type: "func",
          uid: "func_001",
          required: false
        },
        size: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["medium", "small"],
          required: false
        },
        variant: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["default", "outlined"],
          required: false
        }
      }
    }
  },
  "@material-ui/core/CircularProgress": {
    group: "@material-ui/core",
    description: "MuiCircularProgress",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        color: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["inherit", "primary", "secondary"],
          required: false
        },
        size: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }],
          required: false
        },
        style: {
          type: "object",
          uid: "object_001",
          required: false
        },
        thickness: {
          type: "number",
          uid: "number_001",
          required: false
        },
        value: {
          type: "number",
          uid: "number_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/Collapse": {
    group: "@material-ui/core",
    description: "MuiCollapse",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        collapsedSize: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }],
          required: false
        },
        component: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        disableStrictModeCompat: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        "in": {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        onEnter: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onEntered: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onEntering: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onExit: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onExited: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onExiting: {
          type: "func",
          uid: "func_001",
          required: false
        },
        style: {
          type: "object",
          uid: "object_001",
          required: false
        },
        timeout: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "oneOf",
            uid: "oneOf_001",
            options: ["auto"],
            required: false
          }, {
            type: "number",
            uid: "number_002",
            required: false
          }, {
            type: "shape",
            uid: "shape_003",
            options: {
              appear: {
                type: "number",
                uid: "number_001",
                required: false
              },
              enter: {
                type: "number",
                uid: "number_001",
                required: false
              },
              exit: {
                type: "number",
                uid: "number_001",
                required: false
              }
            },
            required: false
          }],
          required: false
        }
      }
    }
  },
  "@material-ui/core/Container": {
    group: "@material-ui/core",
    description: "MuiContainer",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: true
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        component: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        disableGutters: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        fixed: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        maxWidth: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["lg", "md", "sm", "xl", "xs", false],
          required: false
        }
      }
    }
  },
  "@material-ui/core/Dialog": {
    group: "@material-ui/core",
    description: "MuiDialog",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        "aria-describedby": {
          type: "string",
          uid: "string_001",
          required: false
        },
        "aria-labelledby": {
          type: "string",
          uid: "string_001",
          required: false
        },
        BackdropProps: {
          type: "object",
          uid: "object_001",
          required: false
        },
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        disableEscapeKeyDown: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        fullScreen: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        fullWidth: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        maxWidth: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["lg", "md", "sm", "xl", "xs", false],
          required: false
        },
        onClose: {
          type: "func",
          uid: "func_001",
          required: false
        },
        open: {
          type: "bool",
          uid: "bool_001",
          required: true
        },
        PaperComponent: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        PaperProps: {
          type: "object",
          uid: "object_001",
          required: false
        },
        scroll: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["body", "paper"],
          required: false
        },
        TransitionComponent: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        transitionDuration: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "shape",
            uid: "shape_002",
            options: {
              appear: {
                type: "number",
                uid: "number_001",
                required: false
              },
              enter: {
                type: "number",
                uid: "number_001",
                required: false
              },
              exit: {
                type: "number",
                uid: "number_001",
                required: false
              }
            },
            required: false
          }],
          required: false
        },
        TransitionProps: {
          type: "object",
          uid: "object_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/DialogActions": {
    group: "@material-ui/core",
    description: "MuiDialogActions",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        disableSpacing: {
          type: "bool",
          uid: "bool_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/DialogContent": {
    group: "@material-ui/core",
    description: "MuiDialogContent",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        dividers: {
          type: "bool",
          uid: "bool_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/DialogContentText": {
    group: "@material-ui/core",
    description: "MuiDialogContentText",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/DialogTitle": {
    group: "@material-ui/core",
    description: "MuiDialogTitle",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        disableTypography: {
          type: "bool",
          uid: "bool_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/Divider": {
    group: "@material-ui/core",
    description: "MuiDivider",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        absolute: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        component: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        flexItem: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        light: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        orientation: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["horizontal", "vertical"],
          required: false
        },
        role: {
          type: "string",
          uid: "string_001",
          required: false
        },
        variant: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["fullWidth", "inset", "middle"],
          required: false
        }
      }
    }
  },
  "@material-ui/core/Drawer": {
    group: "@material-ui/core",
    description: "MuiDrawer",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        anchor: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["bottom", "left", "right", "top"],
          required: false
        },
        BackdropProps: {
          type: "object",
          uid: "object_001",
          required: false
        },
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        elevation: {
          type: "number",
          uid: "number_001",
          required: false
        },
        ModalProps: {
          type: "object",
          uid: "object_001",
          required: false
        },
        onClose: {
          type: "func",
          uid: "func_001",
          required: false
        },
        open: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        PaperProps: {
          type: "object",
          uid: "object_001",
          required: false
        },
        SlideProps: {
          type: "object",
          uid: "object_001",
          required: false
        },
        transitionDuration: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "shape",
            uid: "shape_002",
            options: {
              appear: {
                type: "number",
                uid: "number_001",
                required: false
              },
              enter: {
                type: "number",
                uid: "number_001",
                required: false
              },
              exit: {
                type: "number",
                uid: "number_001",
                required: false
              }
            },
            required: false
          }],
          required: false
        },
        variant: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["permanent", "persistent", "temporary"],
          required: false
        }
      }
    }
  },
  "@material-ui/core/ExpansionPanel": {
    group: "@material-ui/core",
    description: "MuiExpansionPanel",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        defaultExpanded: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disabled: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        expanded: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        onChange: {
          type: "func",
          uid: "func_001",
          required: false
        },
        square: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        TransitionComponent: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        TransitionProps: {
          type: "object",
          uid: "object_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/ExpansionPanelActions": {
    group: "@material-ui/core",
    description: "MuiExpansionPanelActions",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        disableSpacing: {
          type: "bool",
          uid: "bool_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/ExpansionPanelDetails": {
    group: "@material-ui/core",
    description: "MuiExpansionPanelDetails",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/ExpansionPanelSummary": {
    group: "@material-ui/core",
    description: "MuiExpansionPanelSummary",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        expandIcon: {
          type: "node",
          uid: "node_001",
          required: false
        },
        IconButtonProps: {
          type: "object",
          uid: "object_001",
          required: false
        },
        onBlur: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onClick: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onFocusVisible: {
          type: "func",
          uid: "func_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/Fab": {
    group: "@material-ui/core",
    description: "MuiFab",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: true
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        color: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["default", "inherit", "primary", "secondary"],
          required: false
        },
        component: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        disabled: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disableFocusRipple: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disableRipple: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        focusVisibleClassName: {
          type: "string",
          uid: "string_001",
          required: false
        },
        href: {
          type: "string",
          uid: "string_001",
          required: false
        },
        size: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["large", "medium", "small"],
          required: false
        }
      }
    }
  },
  "@material-ui/core/Fade": {
    group: "@material-ui/core",
    description: "MuiFade",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "element",
          uid: "element_001",
          required: false
        },
        disableStrictModeCompat: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        "in": {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        onEnter: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onEntered: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onEntering: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onExit: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onExited: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onExiting: {
          type: "func",
          uid: "func_001",
          required: false
        },
        style: {
          type: "object",
          uid: "object_001",
          required: false
        },
        timeout: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "shape",
            uid: "shape_002",
            options: {
              appear: {
                type: "number",
                uid: "number_001",
                required: false
              },
              enter: {
                type: "number",
                uid: "number_001",
                required: false
              },
              exit: {
                type: "number",
                uid: "number_001",
                required: false
              }
            },
            required: false
          }],
          required: false
        }
      }
    }
  },
  "@material-ui/core/FilledInput": {
    group: "@material-ui/core",
    description: "MuiFilledInput",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        autoComplete: {
          type: "string",
          uid: "string_001",
          required: false
        },
        autoFocus: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        color: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["primary", "secondary"],
          required: false
        },
        defaultValue: {
          type: "any",
          uid: "any_001",
          required: false
        },
        disabled: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disableUnderline: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        endAdornment: {
          type: "node",
          uid: "node_001",
          required: false
        },
        error: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        fullWidth: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        id: {
          type: "string",
          uid: "string_001",
          required: false
        },
        inputComponent: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        inputProps: {
          type: "object",
          uid: "object_001",
          required: false
        },
        inputRef: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "func",
            uid: "func_001",
            required: false
          }, {
            type: "object",
            uid: "object_002",
            required: false
          }],
          required: false
        },
        margin: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["dense", "none"],
          required: false
        },
        maxRows: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }],
          required: false
        },
        multiline: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        name: {
          type: "string",
          uid: "string_001",
          required: false
        },
        onChange: {
          type: "func",
          uid: "func_001",
          required: false
        },
        placeholder: {
          type: "string",
          uid: "string_001",
          required: false
        },
        readOnly: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        required: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        rows: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }],
          required: false
        },
        startAdornment: {
          type: "node",
          uid: "node_001",
          required: false
        },
        type: {
          type: "string",
          uid: "string_001",
          required: false
        },
        value: {
          type: "any",
          uid: "any_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/FormControl": {
    group: "@material-ui/core",
    description: "MuiFormControl",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        color: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["primary", "secondary"],
          required: false
        },
        component: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        disabled: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        error: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        focused: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        fullWidth: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        hiddenLabel: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        margin: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["dense", "none", "normal"],
          required: false
        },
        required: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        size: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["medium", "small"],
          required: false
        },
        variant: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["filled", "outlined", "standard"],
          required: false
        }
      }
    }
  },
  "@material-ui/core/FormControlLabel": {
    group: "@material-ui/core",
    description: "MuiFormControlLabel",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        checked: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        control: {
          type: "element",
          uid: "element_001",
          required: true
        },
        disabled: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        inputRef: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "func",
            uid: "func_001",
            required: false
          }, {
            type: "object",
            uid: "object_002",
            required: false
          }],
          required: false
        },
        label: {
          type: "node",
          uid: "node_001",
          required: false
        },
        labelPlacement: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["bottom", "end", "start", "top"],
          required: false
        },
        name: {
          type: "string",
          uid: "string_001",
          required: false
        },
        onChange: {
          type: "func",
          uid: "func_001",
          required: false
        },
        value: {
          type: "any",
          uid: "any_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/FormGroup": {
    group: "@material-ui/core",
    description: "MuiFormGroup",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        row: {
          type: "bool",
          uid: "bool_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/FormHelperText": {
    group: "@material-ui/core",
    description: "MuiFormHelperText",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        component: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        disabled: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        error: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        filled: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        focused: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        margin: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["dense"],
          required: false
        },
        required: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        variant: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["filled", "outlined", "standard"],
          required: false
        }
      }
    }
  },
  "@material-ui/core/FormLabel": {
    group: "@material-ui/core",
    description: "MuiFormLabel",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        color: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["primary", "secondary"],
          required: false
        },
        component: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        disabled: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        error: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        filled: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        focused: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        required: {
          type: "bool",
          uid: "bool_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/Grid": {
    group: "@material-ui/core",
    description: "MuiGrid",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        alignContent: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["stretch", "center", "flex-start", "flex-end", "space-between", "space-around"],
          required: false
        },
        alignItems: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["flex-start", "center", "flex-end", "stretch", "baseline"],
          required: false
        },
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: true
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        component: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        container: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        direction: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["row", "row-reverse", "column", "column-reverse"],
          required: false
        },
        item: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        justifyContent: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["flex-start", "center", "flex-end", "space-between", "space-around", "space-evenly"],
          required: false
        },
        lg: {
          type: "oneOf",
          uid: "oneOf_001",
          options: [false, "auto", true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          required: false
        },
        md: {
          type: "oneOf",
          uid: "oneOf_001",
          options: [false, "auto", true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          required: false
        },
        sm: {
          type: "oneOf",
          uid: "oneOf_001",
          options: [false, "auto", true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          required: false
        },
        spacing: {
          type: "oneOf",
          uid: "oneOf_001",
          options: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          required: false
        },
        wrap: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["nowrap", "wrap", "wrap-reverse"],
          required: false
        },
        xl: {
          type: "oneOf",
          uid: "oneOf_001",
          options: [false, "auto", true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          required: false
        },
        xs: {
          type: "oneOf",
          uid: "oneOf_001",
          options: [false, "auto", true, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
          required: false
        },
        zeroMinWidth: {
          type: "bool",
          uid: "bool_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/GridList": {
    group: "@material-ui/core",
    description: "MuiGridList",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        cellHeight: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "oneOf",
            uid: "oneOf_002",
            options: ["auto"],
            required: false
          }],
          required: false
        },
        children: {
          type: "node",
          uid: "node_001",
          required: true
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: true
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        cols: {
          type: "number",
          uid: "number_001",
          required: false
        },
        component: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        spacing: {
          type: "number",
          uid: "number_001",
          required: false
        },
        style: {
          type: "object",
          uid: "object_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/GridListTile": {
    group: "@material-ui/core",
    description: "MuiGridListTile",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: true
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        cols: {
          type: "number",
          uid: "number_001",
          required: false
        },
        component: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        rows: {
          type: "number",
          uid: "number_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/GridListTileBar": {
    group: "@material-ui/core",
    description: "MuiGridListTileBar",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        actionIcon: {
          type: "node",
          uid: "node_001",
          required: false
        },
        actionPosition: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["left", "right"],
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        subtitle: {
          type: "node",
          uid: "node_001",
          required: false
        },
        title: {
          type: "node",
          uid: "node_001",
          required: false
        },
        titlePosition: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["bottom", "top"],
          required: false
        }
      }
    }
  },
  "@material-ui/core/Grow": {
    group: "@material-ui/core",
    description: "MuiGrow",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "element",
          uid: "element_001",
          required: false
        },
        disableStrictModeCompat: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        "in": {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        onEnter: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onEntered: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onEntering: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onExit: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onExited: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onExiting: {
          type: "func",
          uid: "func_001",
          required: false
        },
        style: {
          type: "object",
          uid: "object_001",
          required: false
        },
        timeout: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "oneOf",
            uid: "oneOf_001",
            options: ["auto"],
            required: false
          }, {
            type: "number",
            uid: "number_002",
            required: false
          }, {
            type: "shape",
            uid: "shape_003",
            options: {
              appear: {
                type: "number",
                uid: "number_001",
                required: false
              },
              enter: {
                type: "number",
                uid: "number_001",
                required: false
              },
              exit: {
                type: "number",
                uid: "number_001",
                required: false
              }
            },
            required: false
          }],
          required: false
        }
      }
    }
  },
  "@material-ui/core/Hidden": {
    group: "@material-ui/core",
    description: "MuiHidden",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        implementation: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["js", "css"],
          required: false
        },
        initialWidth: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["xs", "sm", "md", "lg", "xl"],
          required: false
        },
        lgDown: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        lgUp: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        mdDown: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        mdUp: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        only: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "oneOf",
            uid: "oneOf_001",
            options: ["xs", "sm", "md", "lg", "xl"],
            required: false
          }, {
            type: "arrayOf",
            uid: "arrayOf_002",
            options: {
              type: "oneOf",
              uid: "oneOf_001",
              options: ["xs", "sm", "md", "lg", "xl"],
              required: false
            },
            required: false
          }],
          required: false
        },
        smDown: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        smUp: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        xlDown: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        xlUp: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        xsDown: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        xsUp: {
          type: "bool",
          uid: "bool_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/Icon": {
    group: "@material-ui/core",
    description: "MuiIcon",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: true
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        color: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["inherit", "primary", "secondary", "action", "error", "disabled"],
          required: false
        },
        component: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/IconButton": {
    group: "@material-ui/core",
    description: "MuiIconButton",
    propTypes: {
      options: {
        onClick: {
          type: "func",
          uid: "func_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: true
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        color: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["default", "inherit", "primary", "secondary"],
          required: false
        },
        disabled: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disableFocusRipple: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disableRipple: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        edge: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["start", "end", false],
          required: false
        },
        size: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["small", "medium"],
          required: false
        }
      },
      uid: "base",
      type: "exact",
      required: false
    }
  },
  "@material-ui/core/ImageList": {
    group: "@material-ui/core",
    description: "MuiImageList",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        cols: {
          type: "number",
          uid: "number_001",
          required: false
        },
        component: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        gap: {
          type: "number",
          uid: "number_001",
          required: false
        },
        rowHeight: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "oneOf",
            uid: "oneOf_001",
            options: ["auto"],
            required: false
          }, {
            type: "number",
            uid: "number_002",
            required: false
          }],
          required: false
        },
        style: {
          type: "object",
          uid: "object_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/ImageListItem": {
    group: "@material-ui/core",
    description: "MuiImageListItem",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        cols: {
          type: "number",
          uid: "number_001",
          required: false
        },
        component: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        rows: {
          type: "number",
          uid: "number_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/ImageListItemBar": {
    group: "@material-ui/core",
    description: "MuiImageListItemBar",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        actionIcon: {
          type: "node",
          uid: "node_001",
          required: false
        },
        actionPosition: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["left", "right"],
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        position: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["bottom", "top"],
          required: false
        },
        subtitle: {
          type: "node",
          uid: "node_001",
          required: false
        },
        title: {
          type: "node",
          uid: "node_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/Input": {
    group: "@material-ui/core",
    description: "MuiInput",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        autoComplete: {
          type: "string",
          uid: "string_001",
          required: false
        },
        autoFocus: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        color: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["primary", "secondary"],
          required: false
        },
        defaultValue: {
          type: "any",
          uid: "any_001",
          required: false
        },
        disabled: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disableUnderline: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        endAdornment: {
          type: "node",
          uid: "node_001",
          required: false
        },
        error: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        fullWidth: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        id: {
          type: "string",
          uid: "string_001",
          required: false
        },
        inputComponent: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        inputProps: {
          type: "object",
          uid: "object_001",
          required: false
        },
        inputRef: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "func",
            uid: "func_001",
            required: false
          }, {
            type: "object",
            uid: "object_002",
            required: false
          }],
          required: false
        },
        margin: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["dense", "none"],
          required: false
        },
        maxRows: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }],
          required: false
        },
        multiline: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        name: {
          type: "string",
          uid: "string_001",
          required: false
        },
        onChange: {
          type: "func",
          uid: "func_001",
          required: false
        },
        placeholder: {
          type: "string",
          uid: "string_001",
          required: false
        },
        readOnly: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        required: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        rows: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }],
          required: false
        },
        startAdornment: {
          type: "node",
          uid: "node_001",
          required: false
        },
        type: {
          type: "string",
          uid: "string_001",
          required: false
        },
        value: {
          type: "any",
          uid: "any_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/InputAdornment": {
    group: "@material-ui/core",
    description: "MuiInputAdornment",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: true
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: true
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        component: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        disablePointerEvents: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disableTypography: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        muiFormControl: {
          type: "object",
          uid: "object_001",
          required: false
        },
        position: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["start", "end"],
          required: true
        },
        variant: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["standard", "outlined", "filled"],
          required: false
        }
      }
    }
  },
  "@material-ui/core/InputBase": {
    group: "@material-ui/core",
    description: "MuiInputBase",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        "aria-describedby": {
          type: "string",
          uid: "string_001",
          required: false
        },
        autoComplete: {
          type: "string",
          uid: "string_001",
          required: false
        },
        autoFocus: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        color: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["primary", "secondary"],
          required: false
        },
        defaultValue: {
          type: "any",
          uid: "any_001",
          required: false
        },
        disabled: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        endAdornment: {
          type: "node",
          uid: "node_001",
          required: false
        },
        error: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        fullWidth: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        id: {
          type: "string",
          uid: "string_001",
          required: false
        },
        inputComponent: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        inputProps: {
          type: "object",
          uid: "object_001",
          required: false
        },
        inputRef: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "func",
            uid: "func_001",
            required: false
          }, {
            type: "object",
            uid: "object_002",
            required: false
          }],
          required: false
        },
        margin: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["dense", "none"],
          required: false
        },
        maxRows: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }],
          required: false
        },
        minRows: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }],
          required: false
        },
        multiline: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        name: {
          type: "string",
          uid: "string_001",
          required: false
        },
        onBlur: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onChange: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onClick: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onFocus: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onKeyDown: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onKeyUp: {
          type: "func",
          uid: "func_001",
          required: false
        },
        placeholder: {
          type: "string",
          uid: "string_001",
          required: false
        },
        readOnly: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        renderSuffix: {
          type: "func",
          uid: "func_001",
          required: false
        },
        required: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        rows: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }],
          required: false
        },
        rowsMax: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }],
          required: false
        },
        rowsMin: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }],
          required: false
        },
        startAdornment: {
          type: "node",
          uid: "node_001",
          required: false
        },
        type: {
          type: "string",
          uid: "string_001",
          required: false
        },
        value: {
          type: "any",
          uid: "any_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/InputLabel": {
    group: "@material-ui/core",
    description: "MuiInputLabel",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        color: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["primary", "secondary"],
          required: false
        },
        disableAnimation: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disabled: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        error: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        focused: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        margin: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["dense"],
          required: false
        },
        required: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        shrink: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        variant: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["filled", "outlined", "standard"],
          required: false
        }
      }
    }
  },
  "@material-ui/core/LinearProgress": {
    group: "@material-ui/core",
    description: "MuiLinearProgress",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        color: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["primary", "secondary"],
          required: false
        },
        value: {
          type: "number",
          uid: "number_001",
          required: false
        },
        valueBuffer: {
          type: "number",
          uid: "number_001",
          required: false
        },
        variant: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["buffer", "determinate", "indeterminate", "query"],
          required: false
        }
      }
    },
    defaultProps: {
      style: {
        width: "100%"
      }
    }
  },
  "@material-ui/core/Link": {
    group: "@material-ui/core",
    description: "MuiLink",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: true
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: true
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        color: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["initial", "inherit", "primary", "secondary", "textPrimary", "textSecondary", "error"],
          required: false
        },
        onBlur: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onFocus: {
          type: "func",
          uid: "func_001",
          required: false
        },
        TypographyClasses: {
          type: "object",
          uid: "object_001",
          required: false
        },
        underline: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["none", "hover", "always"],
          required: false
        },
        variant: {
          type: "string",
          uid: "string_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/List": {
    group: "@material-ui/core",
    description: "MuiList",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: true
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        component: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        dense: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disablePadding: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        subheader: {
          type: "node",
          uid: "node_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/ListItem": {
    group: "@material-ui/core",
    description: "MuiListItem",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        alignItems: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["flex-start", "center"],
          required: false
        },
        autoFocus: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        button: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: true
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        component: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        ContainerComponent: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        ContainerProps: {
          type: "object",
          uid: "object_001",
          required: false
        },
        dense: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disabled: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disableGutters: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        divider: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        focusVisibleClassName: {
          type: "string",
          uid: "string_001",
          required: false
        },
        selected: {
          type: "bool",
          uid: "bool_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/ListItemAvatar": {
    group: "@material-ui/core",
    description: "MuiListItemAvatar",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "element",
          uid: "element_001",
          required: true
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/ListItemIcon": {
    group: "@material-ui/core",
    description: "MuiListItemIcon",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/ListItemSecondaryAction": {
    group: "@material-ui/core",
    description: "MuiListItemSecondaryAction",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/ListItemText": {
    group: "@material-ui/core",
    description: "MuiListItemText",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        disableTypography: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        inset: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        primary: {
          type: "node",
          uid: "node_001",
          required: false
        },
        primaryTypographyProps: {
          type: "object",
          uid: "object_001",
          required: false
        },
        secondary: {
          type: "node",
          uid: "node_001",
          required: false
        },
        secondaryTypographyProps: {
          type: "object",
          uid: "object_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/ListSubheader": {
    group: "@material-ui/core",
    description: "MuiListSubheader",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: true
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        color: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["default", "primary", "inherit"],
          required: false
        },
        component: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        disableGutters: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disableSticky: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        inset: {
          type: "bool",
          uid: "bool_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/Menu": {
    group: "@material-ui/core",
    description: "MuiMenu",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        anchorEl: {
          type: "func",
          uid: "func_002",
          required: false
        },
        autoFocus: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        disableAutoFocusItem: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        MenuListProps: {
          type: "object",
          uid: "object_001",
          required: false
        },
        onClose: {
          type: "func",
          uid: "func_001",
          required: false
        },
        open: {
          type: "bool",
          uid: "bool_001",
          required: true
        },
        PaperProps: {
          type: "object",
          uid: "object_001",
          required: false
        },
        PopoverClasses: {
          type: "object",
          uid: "object_001",
          required: false
        },
        transitionDuration: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "oneOf",
            uid: "oneOf_001",
            options: ["auto"],
            required: false
          }, {
            type: "number",
            uid: "number_002",
            required: false
          }, {
            type: "shape",
            uid: "shape_003",
            options: {
              appear: {
                type: "number",
                uid: "number_001",
                required: false
              },
              enter: {
                type: "number",
                uid: "number_001",
                required: false
              },
              exit: {
                type: "number",
                uid: "number_001",
                required: false
              }
            },
            required: false
          }],
          required: false
        },
        TransitionProps: {
          type: "object",
          uid: "object_001",
          required: false
        },
        variant: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["menu", "selectedMenu"],
          required: false
        }
      }
    }
  },
  "@material-ui/core/MenuItem": {
    group: "@material-ui/core",
    description: "MuiMenuItem",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: true
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        component: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        dense: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disabled: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disableGutters: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        ListItemClasses: {
          type: "object",
          uid: "object_001",
          required: false
        },
        role: {
          type: "string",
          uid: "string_001",
          required: false
        },
        selected: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        tabIndex: {
          type: "number",
          uid: "number_001",
          required: false
        },
        value: {
          type: "any"
        }
      }
    }
  },
  "@material-ui/core/MenuList": {
    group: "@material-ui/core",
    description: "MuiMenuList",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        autoFocus: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        autoFocusItem: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        disabledItemsFocusable: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disableListWrap: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        onKeyDown: {
          type: "func",
          uid: "func_001",
          required: false
        },
        variant: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["menu", "selectedMenu"],
          required: false
        }
      }
    }
  },
  "@material-ui/core/MobileStepper": {
    group: "@material-ui/core",
    description: "MuiMobileStepper",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        activeStep: {
          type: "number",
          uid: "number_001",
          required: false
        },
        backButton: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        LinearProgressProps: {
          type: "object",
          uid: "object_001",
          required: false
        },
        nextButton: {
          type: "node",
          uid: "node_001",
          required: false
        },
        position: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["bottom", "static", "top"],
          required: false
        },
        steps: {
          type: "number",
          uid: "number_001",
          required: true
        },
        variant: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["dots", "progress", "text"],
          required: false
        }
      }
    }
  },
  "@material-ui/core/Modal": {
    group: "@material-ui/core",
    description: "MuiModal",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        BackdropComponent: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        BackdropProps: {
          type: "object",
          uid: "object_001",
          required: false
        },
        closeAfterTransition: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disableAutoFocus: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disableEnforceFocus: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disableEscapeKeyDown: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disablePortal: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disableRestoreFocus: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disableScrollLock: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        hideBackdrop: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        keepMounted: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        manager: {
          type: "object",
          uid: "object_001",
          required: false
        },
        onClose: {
          type: "func",
          uid: "func_001",
          required: false
        },
        open: {
          type: "bool",
          uid: "bool_001",
          required: true
        }
      }
    }
  },
  "@material-ui/core/NativeSelect": {
    group: "@material-ui/core",
    description: "MuiNativeSelect",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        IconComponent: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        input: {
          type: "element",
          uid: "element_001",
          required: false
        },
        inputProps: {
          type: "object",
          uid: "object_001",
          required: false
        },
        onChange: {
          type: "func",
          uid: "func_001",
          required: false
        },
        value: {
          type: "any",
          uid: "any_001",
          required: false
        },
        variant: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["filled", "outlined", "standard"],
          required: false
        }
      }
    }
  },
  "@material-ui/core/OutlinedInput": {
    group: "@material-ui/core",
    description: "MuiOutlinedInput",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        autoComplete: {
          type: "string",
          uid: "string_001",
          required: false
        },
        autoFocus: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        color: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["primary", "secondary"],
          required: false
        },
        defaultValue: {
          type: "any",
          uid: "any_001",
          required: false
        },
        disabled: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        endAdornment: {
          type: "node",
          uid: "node_001",
          required: false
        },
        error: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        fullWidth: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        id: {
          type: "string",
          uid: "string_001",
          required: false
        },
        inputComponent: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        inputProps: {
          type: "object",
          uid: "object_001",
          required: false
        },
        inputRef: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "func",
            uid: "func_001",
            required: false
          }, {
            type: "object",
            uid: "object_002",
            required: false
          }],
          required: false
        },
        label: {
          type: "node",
          uid: "node_001",
          required: false
        },
        labelWidth: {
          type: "number",
          uid: "number_001",
          required: false
        },
        margin: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["dense", "none"],
          required: false
        },
        maxRows: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }],
          required: false
        },
        multiline: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        name: {
          type: "string",
          uid: "string_001",
          required: false
        },
        notched: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        onChange: {
          type: "func",
          uid: "func_001",
          required: false
        },
        placeholder: {
          type: "string",
          uid: "string_001",
          required: false
        },
        readOnly: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        required: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        rows: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }],
          required: false
        },
        startAdornment: {
          type: "node",
          uid: "node_001",
          required: false
        },
        type: {
          type: "string",
          uid: "string_001",
          required: false
        },
        value: {
          type: "any",
          uid: "any_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/Paper": {
    group: "@material-ui/core",
    description: "MuiPaper",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        component: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        square: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        variant: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["elevation", "outlined"],
          required: false
        }
      }
    }
  },
  "@material-ui/core/Popover": {
    group: "@material-ui/core",
    description: "MuiPopover",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        action: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "func",
            uid: "func_001",
            required: false
          }, {
            type: "object",
            uid: "object_002",
            required: false
          }],
          required: false
        },
        anchorOrigin: {
          type: "shape",
          uid: "shape_001",
          options: {
            horizontal: {
              type: "oneOfType",
              uid: "oneOfType_001",
              options: [{
                type: "oneOf",
                uid: "oneOf_001",
                options: ["center", "left", "right"],
                required: false
              }, {
                type: "number",
                uid: "number_002",
                required: false
              }],
              required: true
            },
            vertical: {
              type: "oneOfType",
              uid: "oneOfType_001",
              options: [{
                type: "oneOf",
                uid: "oneOf_001",
                options: ["bottom", "center", "top"],
                required: false
              }, {
                type: "number",
                uid: "number_002",
                required: false
              }],
              required: true
            }
          },
          required: false
        },
        anchorPosition: {
          type: "shape",
          uid: "shape_001",
          options: {
            left: {
              type: "number",
              uid: "number_001",
              required: true
            },
            top: {
              type: "number",
              uid: "number_001",
              required: true
            }
          },
          required: false
        },
        anchorReference: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["anchorEl", "anchorPosition", "none"],
          required: false
        },
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        elevation: {
          type: "number",
          uid: "number_001",
          required: false
        },
        getContentAnchorEl: {
          type: "func",
          uid: "func_001",
          required: false
        },
        marginThreshold: {
          type: "number",
          uid: "number_001",
          required: false
        },
        onClose: {
          type: "func",
          uid: "func_001",
          required: false
        },
        open: {
          type: "bool",
          uid: "bool_001",
          required: true
        },
        PaperProps: {
          type: "shape",
          uid: "shape_001",
          options: {},
          required: false
        },
        transformOrigin: {
          type: "shape",
          uid: "shape_001",
          options: {
            horizontal: {
              type: "oneOfType",
              uid: "oneOfType_001",
              options: [{
                type: "oneOf",
                uid: "oneOf_001",
                options: ["center", "left", "right"],
                required: false
              }, {
                type: "number",
                uid: "number_002",
                required: false
              }],
              required: true
            },
            vertical: {
              type: "oneOfType",
              uid: "oneOfType_001",
              options: [{
                type: "oneOf",
                uid: "oneOf_001",
                options: ["bottom", "center", "top"],
                required: false
              }, {
                type: "number",
                uid: "number_002",
                required: false
              }],
              required: true
            }
          },
          required: false
        },
        TransitionComponent: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        transitionDuration: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "oneOf",
            uid: "oneOf_001",
            options: ["auto"],
            required: false
          }, {
            type: "number",
            uid: "number_002",
            required: false
          }, {
            type: "shape",
            uid: "shape_003",
            options: {
              appear: {
                type: "number",
                uid: "number_001",
                required: false
              },
              enter: {
                type: "number",
                uid: "number_001",
                required: false
              },
              exit: {
                type: "number",
                uid: "number_001",
                required: false
              }
            },
            required: false
          }],
          required: false
        },
        TransitionProps: {
          type: "object",
          uid: "object_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/Popper": {
    group: "@material-ui/core",
    description: "MuiPopper",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "node",
            uid: "node_001",
            required: false
          }, {
            type: "func",
            uid: "func_002",
            required: false
          }],
          required: true
        },
        disablePortal: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        keepMounted: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        modifiers: {
          type: "object",
          uid: "object_001",
          required: false
        },
        open: {
          type: "bool",
          uid: "bool_001",
          required: true
        },
        placement: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"],
          required: false
        },
        popperOptions: {
          type: "object",
          uid: "object_001",
          required: false
        },
        popperRef: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "func",
            uid: "func_001",
            required: false
          }, {
            type: "object",
            uid: "object_002",
            required: false
          }],
          required: false
        },
        style: {
          type: "object",
          uid: "object_001",
          required: false
        },
        transition: {
          type: "bool",
          uid: "bool_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/Portal": {
    group: "@material-ui/core",
    description: "MuiPortal",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        disablePortal: {
          type: "bool",
          uid: "bool_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/Radio": {
    group: "@material-ui/core",
    description: "MuiRadio",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        checked: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        checkedIcon: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        color: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["default", "primary", "secondary"],
          required: false
        },
        disabled: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disableRipple: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        icon: {
          type: "node",
          uid: "node_001",
          required: false
        },
        id: {
          type: "string",
          uid: "string_001",
          required: false
        },
        inputProps: {
          type: "object",
          uid: "object_001",
          required: false
        },
        inputRef: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "func",
            uid: "func_001",
            required: false
          }, {
            type: "object",
            uid: "object_002",
            required: false
          }],
          required: false
        },
        name: {
          type: "string",
          uid: "string_001",
          required: false
        },
        onChange: {
          type: "func",
          uid: "func_001",
          required: false
        },
        required: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        size: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["medium", "small"],
          required: false
        },
        value: {
          type: "any",
          uid: "any_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/RadioGroup": {
    group: "@material-ui/core",
    description: "MuiRadioGroup",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        defaultValue: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "arrayOf",
            uid: "arrayOf_001",
            options: {
              type: "string",
              uid: "string_001",
              required: false
            },
            required: false
          }, {
            type: "number",
            uid: "number_002",
            required: false
          }, {
            type: "string",
            uid: "string_003",
            required: false
          }],
          required: false
        },
        name: {
          type: "string",
          uid: "string_001",
          required: false
        },
        onChange: {
          type: "func",
          uid: "func_001",
          required: false
        },
        value: {
          type: "any",
          uid: "any_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/Select": {
    group: "@material-ui/core",
    description: "MuiSelect",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        autoWidth: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        defaultValue: {
          type: "any",
          uid: "any_001",
          required: false
        },
        displayEmpty: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        IconComponent: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        id: {
          type: "string",
          uid: "string_001",
          required: false
        },
        input: {
          type: "element",
          uid: "element_001",
          required: false
        },
        inputProps: {
          type: "object",
          uid: "object_001",
          required: false
        },
        label: {
          type: "node",
          uid: "node_001",
          required: false
        },
        labelId: {
          type: "string",
          uid: "string_001",
          required: false
        },
        labelWidth: {
          type: "number",
          uid: "number_001",
          required: false
        },
        MenuProps: {
          type: "object",
          uid: "object_001",
          required: false
        },
        multiple: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        "native": {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        onChange: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onClose: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onOpen: {
          type: "func",
          uid: "func_001",
          required: false
        },
        open: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        renderValue: {
          type: "func",
          uid: "func_001",
          required: false
        },
        SelectDisplayProps: {
          type: "object",
          uid: "object_001",
          required: false
        },
        value: {
          type: "any",
          uid: "any_001",
          required: false
        },
        variant: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["filled", "outlined", "standard"],
          required: false
        }
      }
    }
  },
  "@material-ui/core/Slide": {
    group: "@material-ui/core",
    description: "MuiSlide",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        direction: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["down", "left", "right", "up"],
          required: false
        },
        "in": {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        onEnter: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onEntered: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onEntering: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onExit: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onExited: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onExiting: {
          type: "func",
          uid: "func_001",
          required: false
        },
        style: {
          type: "object",
          uid: "object_001",
          required: false
        },
        timeout: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "shape",
            uid: "shape_002",
            options: {
              appear: {
                type: "number",
                uid: "number_001",
                required: false
              },
              enter: {
                type: "number",
                uid: "number_001",
                required: false
              },
              exit: {
                type: "number",
                uid: "number_001",
                required: false
              }
            },
            required: false
          }],
          required: false
        }
      }
    }
  },
  "@material-ui/core/Slider": {
    group: "@material-ui/core",
    description: "MuiSlider",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        "aria-labelledby": {
          type: "string",
          uid: "string_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: true
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        color: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["primary", "secondary"],
          required: false
        },
        component: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        defaultValue: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "arrayOf",
            uid: "arrayOf_002",
            options: {
              type: "number",
              uid: "number_001",
              required: false
            },
            required: false
          }],
          required: false
        },
        disabled: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        marks: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "bool",
            uid: "bool_001",
            required: false
          }, {
            type: "array",
            uid: "array_002",
            required: false
          }],
          required: false
        },
        max: {
          type: "number",
          uid: "number_001",
          required: false
        },
        min: {
          type: "number",
          uid: "number_001",
          required: false
        },
        name: {
          type: "string",
          uid: "string_001",
          required: false
        },
        onChange: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onChangeCommitted: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onMouseDown: {
          type: "func",
          uid: "func_001",
          required: false
        },
        orientation: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["horizontal", "vertical"],
          required: false
        },
        step: {
          type: "number",
          uid: "number_001",
          required: false
        },
        ThumbComponent: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        track: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["normal", false, "inverted"],
          required: false
        },
        value: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "arrayOf",
            uid: "arrayOf_002",
            options: {
              type: "number",
              uid: "number_001",
              required: false
            },
            required: false
          }],
          required: false
        },
        ValueLabelComponent: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        valueLabelDisplay: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["on", "auto", "off"],
          required: false
        },
        valueLabelFormat: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "string",
            uid: "string_001",
            required: false
          }, {
            type: "func",
            uid: "func_002",
            required: false
          }],
          required: false
        }
      }
    },
    defaultProps: {}
  },
  "@material-ui/core/Snackbar": {
    group: "@material-ui/core",
    description: "MuiSnackbar",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        action: {
          type: "node",
          uid: "node_001",
          required: false
        },
        anchorOrigin: {
          type: "shape",
          uid: "shape_001",
          options: {
            horizontal: {
              type: "oneOf",
              uid: "oneOf_001",
              options: ["center", "left", "right"],
              required: true
            },
            vertical: {
              type: "oneOf",
              uid: "oneOf_001",
              options: ["bottom", "top"],
              required: true
            }
          },
          required: false
        },
        autoHideDuration: {
          type: "number",
          uid: "number_001",
          required: false
        },
        children: {
          type: "element",
          uid: "element_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        ClickAwayListenerProps: {
          type: "object",
          uid: "object_001",
          required: false
        },
        ContentProps: {
          type: "object",
          uid: "object_001",
          required: false
        },
        disableWindowBlurListener: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        key: {
          type: "any",
          uid: "any_001",
          required: false
        },
        message: {
          type: "node",
          uid: "node_001",
          required: false
        },
        onClose: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onMouseEnter: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onMouseLeave: {
          type: "func",
          uid: "func_001",
          required: false
        },
        open: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        resumeHideDuration: {
          type: "number",
          uid: "number_001",
          required: false
        },
        TransitionComponent: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        transitionDuration: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "shape",
            uid: "shape_002",
            options: {
              appear: {
                type: "number",
                uid: "number_001",
                required: false
              },
              enter: {
                type: "number",
                uid: "number_001",
                required: false
              },
              exit: {
                type: "number",
                uid: "number_001",
                required: false
              }
            },
            required: false
          }],
          required: false
        },
        TransitionProps: {
          type: "object",
          uid: "object_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/SnackbarContent": {
    group: "@material-ui/core",
    description: "MuiSnackbarContent",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        action: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        message: {
          type: "node",
          uid: "node_001",
          required: false
        },
        role: {
          type: "string",
          uid: "string_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/Step": {
    group: "@material-ui/core",
    description: "MuiStep",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        active: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        completed: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disabled: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        expanded: {
          type: "bool",
          uid: "bool_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/StepButton": {
    group: "@material-ui/core",
    description: "MuiStepButton",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        active: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        alternativeLabel: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: true
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        completed: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disabled: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        expanded: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        icon: {
          type: "node",
          uid: "node_001",
          required: false
        },
        last: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        optional: {
          type: "node",
          uid: "node_001",
          required: false
        },
        orientation: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["horizontal", "vertical"],
          required: false
        }
      }
    }
  },
  "@material-ui/core/StepConnector": {
    group: "@material-ui/core",
    description: "MuiStepConnector",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/StepContent": {
    group: "@material-ui/core",
    description: "MuiStepContent",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        TransitionComponent: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        transitionDuration: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "oneOf",
            uid: "oneOf_001",
            options: ["auto"],
            required: false
          }, {
            type: "number",
            uid: "number_002",
            required: false
          }, {
            type: "shape",
            uid: "shape_003",
            options: {
              appear: {
                type: "number",
                uid: "number_001",
                required: false
              },
              enter: {
                type: "number",
                uid: "number_001",
                required: false
              },
              exit: {
                type: "number",
                uid: "number_001",
                required: false
              }
            },
            required: false
          }],
          required: false
        },
        TransitionProps: {
          type: "object",
          uid: "object_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/StepIcon": {
    group: "@material-ui/core",
    description: "MuiStepIcon",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        active: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        completed: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        error: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        icon: {
          type: "node",
          uid: "node_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/StepLabel": {
    group: "@material-ui/core",
    description: "MuiStepLabel",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        disabled: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        error: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        icon: {
          type: "node",
          uid: "node_001",
          required: false
        },
        optional: {
          type: "node",
          uid: "node_001",
          required: false
        },
        StepIconComponent: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        StepIconProps: {
          type: "object",
          uid: "object_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/Stepper": {
    group: "@material-ui/core",
    description: "MuiStepper",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        activeStep: {
          type: "number",
          uid: "number_001",
          required: false
        },
        alternativeLabel: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        connector: {
          type: "element",
          uid: "element_001",
          required: false
        },
        nonLinear: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        orientation: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["horizontal", "vertical"],
          required: false
        }
      }
    }
  },
  "@material-ui/core/SvgIcon": {
    group: "@material-ui/core",
    description: "MuiSvgIcon",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        color: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["action", "disabled", "error", "inherit", "primary", "secondary"],
          required: false
        },
        component: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        htmlColor: {
          type: "string",
          uid: "string_001",
          required: false
        },
        shapeRendering: {
          type: "string",
          uid: "string_001",
          required: false
        },
        titleAccess: {
          type: "string",
          uid: "string_001",
          required: false
        },
        viewBox: {
          type: "string",
          uid: "string_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/SwipeableDrawer": {
    group: "@material-ui/core",
    description: "MuiSwipeableDrawer",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        anchor: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["left", "top", "right", "bottom"],
          required: false
        },
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        disableBackdropTransition: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disableDiscovery: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disableSwipeToOpen: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        hideBackdrop: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        hysteresis: {
          type: "number",
          uid: "number_001",
          required: false
        },
        minFlingVelocity: {
          type: "number",
          uid: "number_001",
          required: false
        },
        ModalProps: {
          type: "shape",
          uid: "shape_001",
          options: {
            BackdropProps: {
              type: "shape",
              uid: "shape_001",
              options: {},
              required: false
            }
          },
          required: false
        },
        onClose: {
          type: "func",
          uid: "func_001",
          required: true
        },
        onOpen: {
          type: "func",
          uid: "func_001",
          required: true
        },
        open: {
          type: "bool",
          uid: "bool_001",
          required: true
        },
        PaperProps: {
          type: "shape",
          uid: "shape_001",
          options: {
            style: {
              type: "object",
              uid: "object_001",
              required: false
            }
          },
          required: false
        },
        SwipeAreaProps: {
          type: "object",
          uid: "object_001",
          required: false
        },
        swipeAreaWidth: {
          type: "number",
          uid: "number_001",
          required: false
        },
        transitionDuration: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "shape",
            uid: "shape_002",
            options: {
              enter: {
                type: "number",
                uid: "number_001",
                required: false
              },
              exit: {
                type: "number",
                uid: "number_001",
                required: false
              }
            },
            required: false
          }],
          required: false
        },
        variant: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["permanent", "persistent", "temporary"],
          required: false
        }
      }
    }
  },
  "@material-ui/core/Switch": {
    group: "@material-ui/core",
    description: "MuiSwitch",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        checked: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        checkedIcon: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        color: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["default", "primary", "secondary"],
          required: false
        },
        defaultChecked: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disabled: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disableRipple: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        edge: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["end", "start", false],
          required: false
        },
        icon: {
          type: "node",
          uid: "node_001",
          required: false
        },
        id: {
          type: "string",
          uid: "string_001",
          required: false
        },
        inputProps: {
          type: "object",
          uid: "object_001",
          required: false
        },
        inputRef: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "func",
            uid: "func_001",
            required: false
          }, {
            type: "object",
            uid: "object_002",
            required: false
          }],
          required: false
        },
        onChange: {
          type: "func",
          uid: "func_001",
          required: false
        },
        required: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        size: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["medium", "small"],
          required: false
        },
        value: {
          type: "any",
          uid: "any_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/Tab": {
    group: "@material-ui/core",
    description: "MuiTab",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        classes: {
          type: "object",
          uid: "object_001",
          required: true
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        disabled: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disableFocusRipple: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disableRipple: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        fullWidth: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        icon: {
          type: "node",
          uid: "node_001",
          required: false
        },
        indicator: {
          type: "node",
          uid: "node_001",
          required: false
        },
        label: {
          type: "node",
          uid: "node_001",
          required: false
        },
        onChange: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onClick: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onFocus: {
          type: "func",
          uid: "func_001",
          required: false
        },
        selected: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        selectionFollowsFocus: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        textColor: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["secondary", "primary", "inherit"],
          required: false
        },
        value: {
          type: "any",
          uid: "any_001",
          required: false
        },
        wrapped: {
          type: "bool",
          uid: "bool_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/Table": {
    group: "@material-ui/core",
    description: "MuiTable",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: true
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: true
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        component: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        size: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["small", "medium"],
          required: false
        },
        stickyHeader: {
          type: "bool",
          uid: "bool_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/TableBody": {
    group: "@material-ui/core",
    description: "MuiTableBody",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: true
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        component: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/TableCell": {
    group: "@material-ui/core",
    description: "MuiTableCell",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        align: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["center", "inherit", "justify", "left", "right"],
          required: false
        },
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        component: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        scope: {
          type: "string",
          uid: "string_001",
          required: false
        },
        size: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["medium", "small"],
          required: false
        },
        sortDirection: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["asc", "desc", false],
          required: false
        },
        variant: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["body", "footer", "head"],
          required: false
        }
      }
    }
  },
  "@material-ui/core/TableContainer": {
    group: "@material-ui/core",
    description: "MuiTableContainer",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: true
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        component: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/TableFooter": {
    group: "@material-ui/core",
    description: "MuiTableFooter",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: true
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        component: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/TableHead": {
    group: "@material-ui/core",
    description: "MuiTableHead",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: true
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        component: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/TablePagination": {
    group: "@material-ui/core",
    description: "MuiTablePagination",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        ActionsComponent: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        backIconButtonProps: {
          type: "object",
          uid: "object_001",
          required: false
        },
        backIconButtonText: {
          type: "string",
          uid: "string_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: true
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        colSpan: {
          type: "number",
          uid: "number_001",
          required: false
        },
        component: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        count: {
          type: "number",
          uid: "number_001",
          required: true
        },
        labelDisplayedRows: {
          type: "func",
          uid: "func_001",
          required: false
        },
        labelRowsPerPage: {
          type: "node",
          uid: "node_001",
          required: false
        },
        nextIconButtonProps: {
          type: "object",
          uid: "object_001",
          required: false
        },
        nextIconButtonText: {
          type: "string",
          uid: "string_001",
          required: false
        },
        onPageChange: {
          type: "func",
          uid: "func_001",
          required: true
        },
        onRowsPerPageChange: {
          type: "func",
          uid: "func_001",
          required: false
        },
        rowsPerPage: {
          type: "number",
          uid: "number_001",
          required: true
        },
        rowsPerPageOptions: {
          type: "array",
          uid: "array_001",
          required: false
        },
        SelectProps: {
          type: "object",
          uid: "object_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/TableRow": {
    group: "@material-ui/core",
    description: "MuiTableRow",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: true
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        component: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        hover: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        selected: {
          type: "bool",
          uid: "bool_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/TableSortLabel": {
    group: "@material-ui/core",
    description: "MuiTableSortLabel",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        active: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: true
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        direction: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["asc", "desc"],
          required: false
        },
        hideSortIcon: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        IconComponent: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/Tabs": {
    group: "@material-ui/core",
    description: "MuiTabs",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        action: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "func",
            uid: "func_001",
            required: false
          }, {
            type: "object",
            uid: "object_002",
            required: false
          }],
          required: false
        },
        "aria-label": {
          type: "string",
          uid: "string_001",
          required: false
        },
        "aria-labelledby": {
          type: "string",
          uid: "string_001",
          required: false
        },
        centered: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        component: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        indicatorColor: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["primary", "secondary"],
          required: false
        },
        onChange: {
          type: "func",
          uid: "func_001",
          required: false
        },
        orientation: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["horizontal", "vertical"],
          required: false
        },
        ScrollButtonComponent: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        scrollButtons: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["auto", "desktop", "off", "on"],
          required: false
        },
        selectionFollowsFocus: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        TabIndicatorProps: {
          type: "object",
          uid: "object_001",
          required: false
        },
        TabScrollButtonProps: {
          type: "object",
          uid: "object_001",
          required: false
        },
        textColor: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["inherit", "primary", "secondary"],
          required: false
        },
        value: {
          type: "any",
          uid: "any_001",
          required: false
        },
        variant: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["fullWidth", "scrollable", "standard"],
          required: false
        }
      }
    }
  },
  "@material-ui/core/TabScrollButton": {
    group: "@material-ui/core",
    description: "MuiTabScrollButton",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        direction: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["left", "right"],
          required: true
        },
        disabled: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        orientation: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["horizontal", "vertical"],
          required: true
        }
      }
    }
  },
  "@material-ui/core/TextField": {
    group: "@material-ui/core",
    description: "MuiTextField",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        autoComplete: {
          type: "string",
          uid: "string_001",
          required: false
        },
        autoFocus: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        color: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["primary", "secondary"],
          required: false
        },
        defaultValue: {
          type: "any",
          uid: "any_001",
          required: false
        },
        disabled: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        error: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        FormHelperTextProps: {
          type: "object",
          uid: "object_001",
          required: false
        },
        fullWidth: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        helperText: {
          type: "node",
          uid: "node_001",
          required: false
        },
        hiddenLabel: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        id: {
          type: "string",
          uid: "string_001",
          required: false
        },
        InputLabelProps: {
          type: "object",
          uid: "object_001",
          required: false
        },
        inputProps: {
          type: "object",
          uid: "object_001",
          required: false
        },
        InputProps: {
          type: "object",
          uid: "object_001",
          required: false
        },
        inputRef: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "func",
            uid: "func_001",
            required: false
          }, {
            type: "object",
            uid: "object_002",
            required: false
          }],
          required: false
        },
        label: {
          type: "node",
          uid: "node_001",
          required: false
        },
        margin: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["dense", "none", "normal"],
          required: false
        },
        maxRows: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }],
          required: false
        },
        minRows: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }],
          required: false
        },
        multiline: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        name: {
          type: "string",
          uid: "string_001",
          required: false
        },
        onBlur: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onChange: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onFocus: {
          type: "func",
          uid: "func_001",
          required: false
        },
        placeholder: {
          type: "string",
          uid: "string_001",
          required: false
        },
        required: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        rows: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }],
          required: false
        },
        rowsMax: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "string",
            uid: "string_002",
            required: false
          }],
          required: false
        },
        select: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        SelectProps: {
          type: "object",
          uid: "object_001",
          required: false
        },
        size: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["medium", "small"],
          required: false
        },
        type: {
          type: "string",
          uid: "string_001",
          required: false
        },
        value: {
          type: "any",
          uid: "any_001",
          required: false
        },
        variant: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["filled", "outlined", "standard"],
          required: false
        }
      }
    }
  },
  "@material-ui/core/Toolbar": {
    group: "@material-ui/core",
    description: "MuiToolbar",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: true
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        component: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        disableGutters: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        variant: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["regular", "dense"],
          required: false
        }
      }
    }
  },
  "@material-ui/core/Tooltip": {
    group: "@material-ui/core",
    description: "MuiTooltip",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        arrow: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: false
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        disableFocusListener: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disableHoverListener: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disableTouchListener: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        enterDelay: {
          type: "number",
          uid: "number_001",
          required: false
        },
        enterNextDelay: {
          type: "number",
          uid: "number_001",
          required: false
        },
        enterTouchDelay: {
          type: "number",
          uid: "number_001",
          required: false
        },
        id: {
          type: "string",
          uid: "string_001",
          required: false
        },
        interactive: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        leaveDelay: {
          type: "number",
          uid: "number_001",
          required: false
        },
        leaveTouchDelay: {
          type: "number",
          uid: "number_001",
          required: false
        },
        onClose: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onOpen: {
          type: "func",
          uid: "func_001",
          required: false
        },
        open: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        placement: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"],
          required: false
        },
        PopperComponent: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        PopperProps: {
          type: "object",
          uid: "object_001",
          required: false
        },
        title: {
          type: "node",
          uid: "node_001",
          required: true
        },
        TransitionComponent: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        TransitionProps: {
          type: "object",
          uid: "object_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/Typography": {
    group: "@material-ui/core",
    description: "MuiTypography",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        align: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["inherit", "left", "center", "right", "justify"],
          required: false
        },
        children: {
          type: "node",
          uid: "node_001",
          required: false
        },
        classes: {
          type: "object",
          uid: "object_001",
          required: true
        },
        className: {
          type: "string",
          uid: "string_001",
          required: false
        },
        color: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["initial", "inherit", "primary", "secondary", "textPrimary", "textSecondary", "error"],
          required: false
        },
        component: {
          type: "elementType",
          uid: "elementType_001",
          required: false
        },
        display: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["initial", "block", "inline"],
          required: false
        },
        gutterBottom: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        noWrap: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        paragraph: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        variant: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "caption", "button", "overline", "srOnly", "inherit"],
          required: false
        },
        variantMapping: {
          type: "object",
          uid: "object_001",
          required: false
        }
      }
    }
  },
  "@material-ui/core/Zoom": {
    group: "@material-ui/core",
    description: "MuiZoom",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        children: {
          type: "element",
          uid: "element_001",
          required: false
        },
        disableStrictModeCompat: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        "in": {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        onEnter: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onEntered: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onEntering: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onExit: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onExited: {
          type: "func",
          uid: "func_001",
          required: false
        },
        onExiting: {
          type: "func",
          uid: "func_001",
          required: false
        },
        style: {
          type: "object",
          uid: "object_001",
          required: false
        },
        timeout: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "number",
            uid: "number_001",
            required: false
          }, {
            type: "shape",
            uid: "shape_002",
            options: {
              appear: {
                type: "number",
                uid: "number_001",
                required: false
              },
              enter: {
                type: "number",
                uid: "number_001",
                required: false
              },
              exit: {
                type: "number",
                uid: "number_001",
                required: false
              }
            },
            required: false
          }],
          required: false
        }
      }
    }
  }
};
exports.core = core;
var pickers = {
  "@material-ui/pickers/DatePicker": {
    group: "@material-ui/pickers",
    importTemplate: "{ DatePicker as {{ widget }} }",
    description: "MuiDatePicker",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        autoOk: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disabled: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disableFuture: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disablePast: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        format: {
          type: "string",
          uid: "string_001",
          required: false
        },
        fullWidth: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        label: {
          type: "string",
          uid: "string_001",
          required: false
        },
        name: {
          type: "string",
          uid: "string_001",
          required: false
        },
        readOnly: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        required: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        color: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["primary", "secondary"],
          required: false
        },
        inputVariant: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["standard", "filled", "outlined"],
          required: false
        },
        margin: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["dense", "none", "normal"],
          required: false
        },
        openTo: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["year", "month", "date"],
          required: false
        },
        orientation: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["portrait", "landscape"],
          required: false
        },
        size: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["medium", "small"],
          required: false
        },
        variant: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["dialog", "inline", "static"],
          required: false
        },
        views: {
          type: "arrayOf",
          uid: "arrayOf_001",
          options: {
            type: "oneOf",
            uid: "oneOf_001",
            options: ["year", "month", "date"],
            required: false
          },
          required: false
        },
        value: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "string",
            uid: "string_001",
            required: true
          }, {
            type: "instanceOf",
            uid: "instanceOf_002",
            options: "Date",
            required: true
          }],
          required: true
        },
        onChange: {
          type: "func",
          uid: "func_001",
          required: true
        }
      }
    },
    defaultProps: {
      minDate: "1900-01-01T00:00:00.000Z",
      maxDate: "2100-01-01T00:00:00.000Z",
      invalidDateMessage: "Invalid Date Format",
      minDateMessage: "Date should not be before minimal date",
      maxDateMessage: "Date should not be after maximal date",
      allowKeyboardControl: true,
      openTo: "date",
      views: ["year", "date"]
    }
  },
  "@material-ui/pickers/DateTimePicker": {
    group: "@material-ui/pickers",
    importTemplate: "{ DateTimePicker as {{ widget }} }",
    description: "MuiDateTimePicker",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        ampm: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        autoOk: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disabled: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disableFuture: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disablePast: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        format: {
          type: "string",
          uid: "string_001",
          required: false
        },
        fullWidth: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        label: {
          type: "string",
          uid: "string_001",
          required: false
        },
        name: {
          type: "string",
          uid: "string_001",
          required: false
        },
        readOnly: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        required: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        color: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["primary", "secondary"],
          required: false
        },
        inputVariant: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["standard", "filled", "outlined"],
          required: false
        },
        margin: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["dense", "none", "normal"],
          required: false
        },
        openTo: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["year", "month", "date", "hours", "minutes"],
          required: false
        },
        orientation: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["portrait", "landscape"],
          required: false
        },
        size: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["medium", "small"],
          required: false
        },
        variant: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["dialog", "inline", "static"],
          required: false
        },
        views: {
          type: "arrayOf",
          uid: "arrayOf_001",
          options: {
            type: "oneOf",
            uid: "oneOf_001",
            options: ["year", "month", "date", "hours", "minutes"],
            required: false
          },
          required: false
        },
        value: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "string",
            uid: "string_001",
            required: true
          }, {
            type: "instanceOf",
            uid: "instanceOf_002",
            options: "Date",
            required: true
          }],
          required: true
        },
        onChange: {
          type: "func",
          uid: "func_001",
          required: true
        }
      }
    },
    defaultProps: {
      ampm: true,
      invalidDateMessage: "Invalid Date Format",
      minDate: "1900-01-01T00:00:00.000Z",
      maxDate: "2100-01-01T00:00:00.000Z",
      minDateMessage: "Date should not be before minimal date",
      maxDateMessage: "Date should not be after maximal date",
      allowKeyboardControl: true,
      showTabs: true,
      wider: true,
      orientation: "portrait",
      openTo: "date",
      views: ["year", "date", "hours", "minutes"]
    }
  },
  "@material-ui/pickers/TimePicker": {
    group: "@material-ui/pickers",
    importTemplate: "{ TimePicker as {{ widget }} }",
    description: "MuiTimePicker",
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        ampm: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        autoOk: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disabled: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disableFuture: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        disablePast: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        format: {
          type: "string",
          uid: "string_001",
          required: false
        },
        fullWidth: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        label: {
          type: "string",
          uid: "string_001",
          required: false
        },
        name: {
          type: "string",
          uid: "string_001",
          required: false
        },
        readOnly: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        required: {
          type: "bool",
          uid: "bool_001",
          required: false
        },
        color: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["primary", "secondary"],
          required: false
        },
        inputVariant: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["standard", "filled", "outlined"],
          required: false
        },
        margin: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["dense", "none", "normal"],
          required: false
        },
        openTo: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["hours", "minutes", "seconds"],
          required: false
        },
        orientation: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["portrait", "landscape"],
          required: false
        },
        size: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["medium", "small"],
          required: false
        },
        variant: {
          type: "oneOf",
          uid: "oneOf_001",
          options: ["dialog", "inline", "static"],
          required: false
        },
        views: {
          type: "arrayOf",
          uid: "arrayOf_001",
          options: {
            type: "oneOf",
            uid: "oneOf_001",
            options: ["hours", "minutes", "seconds"],
            required: false
          },
          required: false
        },
        value: {
          type: "oneOfType",
          uid: "oneOfType_001",
          options: [{
            type: "string",
            uid: "string_001",
            required: true
          }, {
            type: "instanceOf",
            uid: "instanceOf_002",
            options: "Date",
            required: true
          }],
          required: true
        },
        onChange: {
          type: "func",
          uid: "func_001",
          required: true
        }
      }
    },
    defaultProps: {
      ampm: true,
      invalidDateMessage: "Invalid Time Format",
      openTo: "hours",
      views: ["hours", "minutes"]
    }
  }
};
exports.pickers = pickers;
var decorations = {
  "@appcraft/visualizer/decorations/with-mui-styles": {
    description: "withMuiStyles",
    propTypes: null,
    configTypes: {
      type: "object"
    }
  },
  "@appcraft/visualizer/decorations/with-element-map": {
    description: "withElementMap",
    configTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        dataMappingProps: {
          type: "arrayOf",
          uid: "arrayOf_001",
          options: {
            type: "exact",
            uid: "exact_001",
            options: {
              sourceCode: {
                type: "string",
                uid: "string_001",
                required: true
              },
              keyField: {
                type: "string",
                uid: "string_001",
                required: false
              },
              mappingPropPath: {
                type: "string",
                uid: "string_001",
                required: true
              },
              childPairs: {
                type: "arrayOf",
                uid: "arrayOf_001",
                options: {
                  type: "oneOfType",
                  uid: "oneOfType_001",
                  options: [{
                    type: "string",
                    uid: "string_001",
                    required: true
                  }, {
                    type: "exact",
                    uid: "exact_002",
                    options: {
                      propPath: {
                        type: "string",
                        uid: "string_001",
                        required: true
                      },
                      field: {
                        type: "string",
                        uid: "string_001",
                        required: false
                      }
                    },
                    required: false
                  }],
                  required: false
                },
                required: true
              }
            },
            required: true
          },
          required: true
        }
      }
    },
    propTypes: {
      uid: "base",
      type: "exact",
      required: false,
      options: {
        ElementMapProps: {
          type: "exact",
          uid: "exact_001",
          options: {
            datasource: {
              type: "arrayOf",
              uid: "arrayOf_001",
              options: {
                type: "exact",
                uid: "exact_001",
                options: {
                  code: {
                    type: "string",
                    uid: "string_001",
                    required: true
                  },
                  data: {
                    type: "array",
                    uid: "array_001",
                    required: false
                  }
                },
                required: false
              },
              required: false
            }
          },
          required: false
        }
      }
    }
  }
};
exports.decorations = decorations;
var _default = {
  core: core,
  pickers: pickers,
  decorations: decorations
};
exports["default"] = _default;