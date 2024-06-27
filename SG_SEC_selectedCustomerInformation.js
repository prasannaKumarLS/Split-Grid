a!sectionLayout(
  contents: {
    a!cardLayout(
      contents: a!columnsLayout(
        showDividers: true,
        columns: {
          a!columnLayout(
            contents: {
              a!richTextDisplayField(
                value: {
                  a!richTextItem(
                    text: ri!selectedCustomerData.name,
                    color: "ACCENT",
                    size: "MEDIUM_PLUS",
                    style: "STRONG"
                  ),
                  char(10),
                  a!richTextItem(
                    text: ri!selectedCustomerData.position,
                    size: "SMALL"
                  )
                },
                align: "CENTER"
              ),
              a!richTextDisplayField(
                value: {
                  a!richTextItem(text: concat("+91 99123 45678 ")),
                  a!richTextIcon(
                    icon: "clone",
                    link: 'type!{http://www.appian.com/ae/types/2009}CopyToClipboardLink'(textToCopy: "+ 91 99123 45678 "),
                    linkStyle: "STANDALONE",
                    caption: "Copy to clipboard"
                  ),
                  a!richTextItem(
                    text: concat(
                      " |  ",
                      ri!selectedCustomerData.email,
                      " "
                    )
                  ),
                  a!richTextIcon(
                    icon: "clone",
                    caption: "Copy to clipboard",
                    link: 'type!{http://www.appian.com/ae/types/2009}CopyToClipboardLink'(
                      textToCopy: ri!selectedCustomerData.email
                    ),
                    linkStyle: "STANDALONE"
                  )
                },
                align: "CENTER"
              ),
              a!richTextDisplayField(
                value: {
                  a!richTextItem(
                    text: concat(
                      "I am a dedicated Appian developer with a passion for leveraging low-code technology to drive business innovation and efficiency. With ",
                      ri!selectedCustomerData.experience,
                      " years ",
                      "of experience in developing solutions on the Appian platform, I have a proven track record of delivering robust applications that streamline processes and enhance user experience."
                    )
                  )
                },
                align: "CENTER"
              ),
              a!horizontalLine(
                weight: "THIN",
                marginAbove: "LESS",
                marginBelow: "LESS"
              ),
              a!richTextDisplayField(
                value: a!richTextItem(
                  text: "Skills",
                  size: "MEDIUM",
                  style: "STRONG",
                  
                ),
                align: "CENTER",
                marginBelow: "NONE",
                marginAbove: "NONE"
              ),
              a!columnsLayout(
                spacing: "NONE",
                marginAbove: "NONE",
                columns: {
                  /*a!columnLayout(width: "EXTRA_NARROW"),*/
                  a!columnLayout(
                    a!tagField(
                      marginAbove: "NONE",
                      marginBelow: "EVEN_LESS",
                      tags: {
                        a!tagItem(text: "Appian"),
                        a!tagItem(text: "Javascript"),
                        a!tagItem(text: "Python"),
                        a!tagItem(text: "SQL")
                      },
                      align: "CENTER"
                    )
                  )
                }
              )
            }
          ),
          a!columnLayout(
            contents: {
              /*a!cardLayout(*/
              /*contents: */
              a!sectionLayout(
                label: "",
                labelHeadingTag: "H1",
                labelSize: "SMALL",
                contents: {
                  a!richTextDisplayField(
                    value: {
                      a!richTextItem(
                        text: "Basic Information",
                        color: "ACCENT",
                        size: "MEDIUM_PLUS",
                        style: "STRONG"
                      ),
                      
                    },
                    align: ""
                  ),
                  a!columnsLayout(
                    columns: {
                      a!columnLayout(
                        contents: {
                          a!richTextDisplayField(
                            label: "Date of Birth",
                            value: {
                              a!richTextIcon(icon: "calendar-alt"),
                              a!richTextItem(
                                text: concat(
                                  " ",
                                  datetext(date(1998, 06, 24), "dd MMM yyyy")
                                )
                              )
                            }
                          ),
                          a!richTextDisplayField(
                            label: "Last Working Day",
                            value: {
                              a!richTextIcon(icon: "calendar"),
                              a!richTextItem(
                                text: concat(" ", datetext(today() + 45, "dd MMM yyyy"))
                              )
                            }
                          ),
                          a!richTextDisplayField(
                            label: "Current Location",
                            value: {
                              a!richTextIcon(icon: "map-marker"),
                              a!richTextItem(text: concat(" ", "Virginia, US"))
                            }
                          )
                        }
                      ),
                      a!columnLayout(
                        contents: {
                          a!richTextDisplayField(
                            label: "Current CTC",
                            value: {
                              a!richTextIcon(icon: "usd"),
                              a!richTextItem(text: "60000")
                            }
                          ),
                          a!richTextDisplayField(
                            label: "Expected CTC",
                            value: {
                              a!richTextIcon(icon: "comment-dollar"),
                              char(32),
                              a!richTextItem(text: "90000")
                            }
                          ),
                          a!richTextDisplayField(
                            label: "Preferred Location",
                            value: {
                              a!richTextIcon(icon: "map-pin"),
                              a!richTextItem(text: concat(" ", "Texas, US"))
                            }
                          )
                        }
                      ),
                      a!columnLayout(
                        contents: {
                          a!richTextDisplayField(
                            label: "Total Experience",
                            value: {
                              a!richTextIcon(icon: "briefcase"),
                              a!richTextItem(
                                text: concat(
                                  " ",
                                  ri!selectedCustomerData.experience,
                                  " years"
                                )
                              )
                            }
                          ),
                          a!richTextDisplayField(
                            label: "Relevant Experience",
                            value: {
                              a!richTextIcon(icon: "address-card"),
                              a!richTextItem(text: " 4 years 7 months")
                            }
                          )
                        }
                      ),
                      a!columnLayout(
                        contents: {
                          a!gaugeField(
                            labelPosition: "ABOVE",
                            percentage: 85,
                            color: "POSITIVE",
                            align: "START",
                            size: "SMALL",
                            label: "Profile Completion",
                            accessibilityText: "jksdhfkj",
                            primaryText: a!gaugePercentage()
                          )
                        }
                      ),
                      
                    }
                  )
                }
              ),
              /*shape: "SEMI_ROUNDED",*/
              /*showBorder: false,*/
              /*style: "#CDE8E5"*/
              /*showShadow: true,*/
              /*)*/
              
            }
          )
        },
        spacing: "SPARSE"
      ),
      shape: "ROUNDED",
      showBorder: false,
      showShadow: true,
      
    )
  },
  showWhen: a!isNotNullOrEmpty(ri!selectedIndex),
  marginBelow: "NONE"
)