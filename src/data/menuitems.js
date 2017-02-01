const menuItems = [
  {
    title: "Documents",
    image_url: "documents-icon.png",
    onClick: false,
    onMouseOut: true,
    onMouseOver: true,
    isSubmenu: false,
    popup: null,
    items: [
      {
        title: "Random shit",
        image_url: "random-icon.png",
        onClick: false,
        onMouseOut: false,
        onMouseOver: false,
        isSubmenu: true,
        popup: null,
        items: null
      }
    ]
  },
  {
    title: "Settings",
    image_url: "settings-icon.png",
    onClick: false,
    onMouseOut: true,
    onMouseOver: true,
    isSubmenu: false,
    popup: null,
    items: [
      {
        title: "Control Panel",
        image_url: "controlpanel-icon.png",
        onClick: true,
        onMouseOut: false,
        onMouseOver: false,
        isSubmenu: true,
        popup:
          {
            title: "Error",
            image_url: "error-icon.png",
            message:  [
                        "Control panel not found.",
                        "Nevermind. Control is an illusion."
                      ],
            button_text: "Cancel"
          },
        items: null
      }
    ]
  },
  {
    title: "Run...",
    image_url: "run-icon.png",
    onClick: true,
    onMouseOut: false,
    onMouseOver: false,
    isSubmenu: false,
    popup:
      {
        title: "Warning",
        image_url: "warning-icon.png",
        message: [
                    "You can't run forever"
                  ],
        button_text: "Abort"
      },
    items: null
  }
];

export default menuItems;