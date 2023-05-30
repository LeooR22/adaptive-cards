export default {
  type: "AdaptiveCard",
  $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
  version: "1.4",
  body: [
    {
      type: "Container",
      bleed: true,
      backgroundImage: {
        url:
          "https://raw.githubusercontent.com/pnp/AdaptiveCards-Templates/main/samples/timeoff/assets/plane.jpg",
        verticalAlignment: "Bottom",
        horizontalAlignment: "Center"
      },
      minHeight: "240px",
      verticalContentAlignment: "Bottom",
      items: [
        {
          type: "ColumnSet",
          columns: [
            {
              type: "Column",
              width: 50,
              items: [
                {
                  type: "TextBlock",
                  text: "Let's go places",
                  wrap: true,
                  size: "ExtraLarge",
                  weight: "Bolder"
                }
              ],
              style: "default"
            },
            {
              type: "Column",
              width: 50
            }
          ]
        }
      ]
    },
    {
      type: "Container",
      style: "default",
      items: [
        {
          type: "TextBlock",
          text: "Current balance",
          wrap: true,
          size: "Medium",
          weight: "Bolder",
          spacing: "Medium"
        }
      ],
      spacing: "Medium"
    },
    {
      type: "Container",
      style: "emphasis",
      items: [
        {
          type: "ColumnSet",
          columns: [
            {
              type: "Column",
              width: 8
            },
            {
              type: "Column",
              width: 62,
              items: [
                {
                  type: "TextBlock",
                  text: "Type",
                  wrap: true,
                  size: "Small",
                  weight: "Bolder"
                }
              ]
            },
            {
              type: "Column",
              width: 15,
              items: [
                {
                  type: "TextBlock",
                  text: "Hours",
                  wrap: true,
                  size: "Small",
                  weight: "Bolder"
                }
              ]
            },
            {
              type: "Column",
              width: 15,
              items: [
                {
                  type: "TextBlock",
                  text: "Days",
                  wrap: true,
                  weight: "Bolder",
                  size: "Small"
                }
              ]
            }
          ],
          spacing: "Medium"
        },
        {
          type: "ColumnSet",
          columns: [
            {
              type: "Column",
              width: 8,
              items: [
                {
                  type: "Image",
                  url:
                    "https://raw.githubusercontent.com/pnp/AdaptiveCards-Templates/main/samples/timeoff/assets/icn_medical.svg",
                  width: "20px",
                  height: "20px"
                }
              ]
            },
            {
              type: "Column",
              width: 50,
              items: [
                {
                  type: "TextBlock",
                  text: "Sick days",
                  wrap: true,
                  weight: "Bolder"
                },
                {
                  type: "TextBlock",
                  text:
                    "Current accrual rate eight (8) hours or one (1) day per three (3) months. ",
                  wrap: true,
                  size: "Small",
                  isSubtle: true
                }
              ]
            },
            {
              type: "Column",
              width: 15,
              items: [
                {
                  type: "TextBlock",
                  text: "8 hrs",
                  wrap: true
                }
              ]
            },
            {
              type: "Column",
              width: 15,
              items: [
                {
                  type: "TextBlock",
                  text: "1 day",
                  wrap: true
                }
              ]
            }
          ],
          separator: true,
          spacing: "Medium"
        },
        {
          type: "ColumnSet",
          columns: [
            {
              type: "Column",
              width: 8,
              items: [
                {
                  type: "Image",
                  width: "20px",
                  height: "20px",
                  url:
                    "https://raw.githubusercontent.com/pnp/AdaptiveCards-Templates/main/samples/timeoff/assets/icn_beach.svg"
                }
              ]
            },
            {
              type: "Column",
              width: 50,
              items: [
                {
                  type: "TextBlock",
                  text: "Paid time off",
                  wrap: true,
                  weight: "Bolder"
                },
                {
                  type: "TextBlock",
                  text:
                    "Current accrual rate eight (8) hours or one (1) day per one (1) month. ",
                  wrap: true,
                  size: "Small",
                  isSubtle: true
                }
              ]
            },
            {
              type: "Column",
              width: 15,
              items: [
                {
                  type: "TextBlock",
                  text: "88 hrs",
                  wrap: true
                }
              ]
            },
            {
              type: "Column",
              width: 15,
              items: [
                {
                  type: "TextBlock",
                  text: "11 days",
                  wrap: true
                }
              ]
            }
          ],
          separator: true,
          spacing: "Medium"
        },
        {
          type: "ColumnSet",
          columns: [
            {
              type: "Column",
              width: 8,
              items: [
                {
                  type: "Image",
                  url:
                    "https://raw.githubusercontent.com/pnp/AdaptiveCards-Templates/main/samples/timeoff/assets/icn_leaves_two.svg",
                  width: "20px",
                  height: "20px"
                }
              ]
            },
            {
              type: "Column",
              width: 50,
              items: [
                {
                  type: "TextBlock",
                  text: "Wellness",
                  wrap: true,
                  weight: "Bolder"
                },
                {
                  type: "TextBlock",
                  text: "One time affordance of five (5) days in year 2021",
                  wrap: true,
                  size: "Small",
                  isSubtle: true
                }
              ]
            },
            {
              type: "Column",
              width: 15,
              items: [
                {
                  type: "TextBlock",
                  text: "12 hrs",
                  wrap: true
                }
              ]
            },
            {
              type: "Column",
              width: 15,
              items: [
                {
                  type: "TextBlock",
                  text: "1.5 days",
                  wrap: true
                }
              ]
            }
          ],
          separator: true,
          spacing: "Medium"
        }
      ]
    },
    {
      type: "TextBlock",
      text: "Submit time off",
      wrap: true,
      weight: "Bolder",
      size: "Medium",
      spacing: "Large"
    },
    {
      type: "TextBlock",
      text:
        "To avoid forfeiture of time you need to take and submit all vacation hours for the current calendar year prior to December 31.",
      wrap: true
    },
    {
      type: "Input.ChoiceSet",
      choices: [
        {
          title: "Sick day",
          value: "sick"
        },
        {
          title: "Paid time off",
          value: "paid"
        },
        {
          title: "Wellmess ",
          value: "well"
        }
      ],
      placeholder: "Placeholder text",
      value: "sick",
      label: "Type",
      id: "inp_sick"
    },
    {
      type: "Input.Toggle",
      value: "true",
      title: "All day (8 hrs)",
      id: "tgl_all_day"
    },
    {
      type: "Input.Date",
      label: "Date",
      value: "11-11-2021",
      isRequired: true,
      id: "drp_date",
      errorMessage: "Please enter a date"
    },
    {
      type: "ActionSet",
      actions: [
        {
          type: "Action.Submit",
          title: "Submit",
          style: "positive",
          id: "btn_submit"
        },
        {
          type: "Action.Submit",
          title: "Cancel",
          id: "btn_cancel"
        }
      ],
      spacing: "Medium"
    },
    {
      type: "Container",
      items: [
        {
          type: "TextBlock",
          text: "Read FAQ",
          wrap: true,
          color: "Accent"
        }
      ],
      spacing: "Medium",
      selectAction: {
        type: "Action.OpenUrl",
        url: "https://tar.microsoft.com/Common/TARFAQ-Tips.html"
      },
      id: "url_faq"
    }
  ]
};
