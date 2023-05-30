export default {
  type: "AdaptiveCard",
  $schema: "http://adaptivecards.io/schemas/adaptive-card.json",
  version: "1.3",
  body: [
    {
      type: "Container",
      backgroundImage: {
        url:
          "https://raw.githubusercontent.com/pnp/AdaptiveCards-Templates/main/samples/event-schedule/assets/Ignite-2021-fall-trim.gif",
        horizontalAlignment: "Center",
        verticalAlignment: "Center"
      },
      bleed: true,
      height: "stretch",
      minHeight: "240px",
      horizontalAlignment: "Center",
      spacing: "None"
    },
    {
      type: "TextBlock",
      text: "Microsoft Ignite 2021",
      wrap: true,
      size: "Small",
      isSubtle: true
    },
    {
      type: "TextBlock",
      text: "Schedule",
      wrap: true,
      size: "Large",
      weight: "Bolder",
      spacing: "Medium"
    },
    {
      type: "TextBlock",
      text:
        "Join us November 2–3, 2021 to explore the latest tools, training sessions, technical expertise, networking opportunities, and more.",
      wrap: true
    },
    {
      type: "TextBlock",
      text:
        "See what’s coming up and when it will be happening. The schedule adjusts to your time zone and content is updated regularly, so check back often.",
      wrap: true,
      size: "Default"
    },
    {
      type: "Container",
      id: "day_1",
      items: [
        {
          type: "ColumnSet",
          columns: [
            {
              type: "Column",
              width: "stretch",
              items: [
                {
                  type: "TextBlock",
                  text: "DAY 1",
                  wrap: true,
                  weight: "Bolder",
                  horizontalAlignment: "Center"
                }
              ]
            },
            {
              type: "Column",
              width: "stretch",
              items: [
                {
                  type: "TextBlock",
                  text: "DAY 2",
                  wrap: true,
                  color: "Accent",
                  horizontalAlignment: "Center"
                }
              ],
              id: "show_d2",
              selectAction: {
                type: "Action.ToggleVisibility",
                title: "Show day 2 schedule",
                targetElements: ["day_1", "day_2"],
                id: "show_d2"
              }
            }
          ],
          spacing: "Large"
        },
        {
          type: "ColumnSet",
          columns: [
            {
              type: "Column",
              width: "stretch",
              backgroundImage: {
                url:
                  "https://raw.githubusercontent.com/pnp/AdaptiveCards-Templates/main/samples/event-schedule/assets/line_pivot_dark.svg",
                fillMode: "RepeatHorizontally",
                verticalAlignment: "Center"
              },
              minHeight: "3px",
              style: "default"
            },
            {
              type: "Column",
              width: "stretch",
              minHeight: "3px",
              backgroundImage: {
                fillMode: "RepeatHorizontally",
                verticalAlignment: "Center"
              }
            }
          ],
          spacing: "None"
        },
        {
          type: "TextBlock",
          text: "${$root.days[0].day}",
          wrap: true,
          size: "Medium",
          weight: "Bolder",
          spacing: "Medium"
        },
        {
          type: "ColumnSet",
          $data: "${$root.days[0].entries}",
          columns: [
            {
              type: "Column",
              width: 15,
              items: [
                {
                  type: "TextBlock",
                  text: "${when}",
                  wrap: true,
                  size: "Small",
                  isSubtle: true
                }
              ]
            },
            {
              type: "Column",
              width: 65,
              items: [
                {
                  type: "TextBlock",
                  text: "${what}",
                  wrap: true,
                  size: "Default"
                }
              ]
            }
          ],
          separator: true
        },
        {
          spacing: "Medium"
        }
      ],
      spacing: "Large"
    },
    {
      type: "Container",
      id: "day_2",
      items: [
        {
          type: "ColumnSet",
          columns: [
            {
              type: "Column",
              width: "stretch",
              items: [
                {
                  type: "TextBlock",
                  text: "DAY 1",
                  wrap: true,
                  weight: "Default",
                  color: "Accent",
                  horizontalAlignment: "Center"
                }
              ],
              selectAction: {
                type: "Action.ToggleVisibility",
                title: "Show day 1 schedule",
                targetElements: ["day_1", "day_2"]
              },
              id: "show_d1"
            },
            {
              type: "Column",
              width: "stretch",
              items: [
                {
                  type: "TextBlock",
                  text: "DAY 2",
                  wrap: true,
                  color: "Default",
                  weight: "Bolder",
                  horizontalAlignment: "Center"
                }
              ]
            }
          ],
          spacing: "Large"
        },
        {
          type: "ColumnSet",
          columns: [
            {
              type: "Column",
              width: "stretch",
              backgroundImage: {
                fillMode: "RepeatHorizontally",
                verticalAlignment: "Center"
              },
              minHeight: "3px",
              style: "default"
            },
            {
              type: "Column",
              width: "stretch",
              minHeight: "3px",
              backgroundImage: {
                fillMode: "RepeatHorizontally",
                verticalAlignment: "Center",
                url:
                  "https://raw.githubusercontent.com/pnp/AdaptiveCards-Templates/main/samples/event-schedule/assets/line_pivot_dark.svg"
              }
            }
          ],
          spacing: "None"
        },
        {
          type: "TextBlock",
          text: "${$root.days[1].day}",
          wrap: true,
          size: "Medium",
          weight: "Bolder",
          spacing: "Medium"
        },
        {
          type: "ColumnSet",
          columns: [
            {
              type: "Column",
              width: 15,
              items: [
                {
                  type: "TextBlock",
                  text: "Time",
                  wrap: true,
                  size: "Small",
                  color: "Accent",
                  isSubtle: true,
                  weight: "Bolder"
                }
              ]
            },
            {
              type: "Column",
              width: 65,
              items: [
                {
                  type: "TextBlock",
                  text: "Description",
                  wrap: true,
                  size: "Small",
                  color: "Accent",
                  isSubtle: true,
                  weight: "Bolder"
                }
              ]
            }
          ],
          spacing: "Medium"
        },
        {
          type: "ColumnSet",
          $data: "${$root.days[1].entries}",
          columns: [
            {
              type: "Column",
              width: 15,
              items: [
                {
                  type: "TextBlock",
                  text: "${when}",
                  wrap: true,
                  size: "Small",
                  isSubtle: true
                }
              ]
            },
            {
              type: "Column",
              width: 65,
              items: [
                {
                  type: "TextBlock",
                  text: "${what}",
                  wrap: true,
                  size: "Default"
                }
              ]
            }
          ],
          separator: true
        }
      ],
      spacing: "Large",
      isVisible: false
    },
    {
      type: "ActionSet",
      actions: [
        {
          type: "Action.ToggleVisibility",
          title: "Register",
          style: "positive",
          targetElements: ["Reg_form", "show_reg"]
        }
      ],
      spacing: "ExtraLarge",
      id: "show_reg"
    },
    {
      type: "Container",
      style: "attention",
      items: [
        {
          type: "TextBlock",
          text: "Registration form",
          wrap: true,
          size: "Large",
          weight: "Bolder",
          spacing: "ExtraLarge"
        },
        {
          type: "Input.Text",
          placeholder: "Type your first name",
          label: "First name",
          value: "John",
          isRequired: true,
          errorMessage: "Enter your first name.",
          id: "first_name"
        },
        {
          type: "Input.Text",
          label: "Last name",
          isRequired: true,
          placeholder: "Type your last name",
          value: "Doe",
          errorMessage: "Enter your last name.",
          id: "last_name"
        },
        {
          type: "Input.Text",
          label: "Company",
          isRequired: true,
          placeholder: "Add you company name",
          errorMessage: "Enter your company name.",
          id: "company_name"
        },
        {
          type: "Input.Text",
          placeholder: "(000) 000-0000",
          label: "Phone",
          regex: "(000) 000-0000",
          isRequired: true,
          errorMessage: "Enter your phone number.",
          id: "phone"
        },
        {
          type: "TextBlock",
          text:
            "An email containing a One-Time Passcode will be sent to the email address you have provided.",
          wrap: true,
          isSubtle: true,
          size: "Small",
          spacing: "Small"
        },
        {
          type: "Input.Toggle",
          title:
            "By continuing, you acknowledge that you’ve read and accepted our Notice of Privacy Practices.",
          wrap: true,
          spacing: "Medium",
          errorMessage: "Please accept Notice of Privacy Practices.",
          id: "accept_policy"
        },
        {
          type: "ActionSet",
          spacing: "Medium",
          actions: [
            {
              type: "Action.Submit",
              title: "Submit",
              style: "positive",
              associatedInputs: "none",
              id: "data_send"
            },
            {
              type: "Action.ToggleVisibility",
              title: "Cancel",
              id: "hide_reg",
              targetElements: ["Reg_form", "show_reg"]
            }
          ]
        }
      ],
      isVisible: false,
      spacing: "ExtraLarge",
      id: "Reg_form"
    }
  ]
};
