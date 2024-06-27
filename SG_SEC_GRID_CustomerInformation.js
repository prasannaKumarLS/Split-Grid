a!gridLayout(
  headerCells: if(
    ri!isSecondaryGrid = true,
    {
      a!gridLayoutHeaderCell(),
      a!gridLayoutHeaderCell(),
      a!gridLayoutHeaderCell(),
      a!gridLayoutHeaderCell(),
      a!gridLayoutHeaderCell(),
      a!gridLayoutHeaderCell(),
      a!gridLayoutHeaderCell(),
      a!gridLayoutHeaderCell()
    },
    {
      a!gridLayoutHeaderCell(),
      a!gridLayoutHeaderCell(),
      a!gridLayoutHeaderCell(label: "Name", align: "CENTER"),
      a!gridLayoutHeaderCell(label: "Email", align: "CENTER"),
      a!gridLayoutHeaderCell(label: "Position Type", align: "CENTER"),
      a!gridLayoutHeaderCell(label: "Organization", align: "CENTER"),
      a!gridLayoutHeaderCell(label: "Experience", align: "CENTER"),
      a!gridLayoutHeaderCell()
    }
  ),
  columnConfigs: {
    a!gridLayoutColumnConfig(width: "ICON"),
    a!gridLayoutColumnConfig(width: "NARROW"),
    a!gridLayoutColumnConfig(width: "DISTRIBUTE"),
    a!gridLayoutColumnConfig(width: "DISTRIBUTE"),
    a!gridLayoutColumnConfig(width: "DISTRIBUTE"),
    a!gridLayoutColumnConfig(width: "DISTRIBUTE"),
    a!gridLayoutColumnConfig(width: "DISTRIBUTE"),
    a!gridLayoutColumnConfig(width: "ICON")
  },
  rows: a!forEach(
    rule!SG_RULE_returnSplitDataBasedOnSelectedIndex(
      data: ri!customerData,
      isSecondaryGrid: ri!isSecondaryGrid,
      selectedIndex: ri!selectedIndex
    ),
    a!gridRowLayout(
      id: fv!item.id,
      contents: {
        a!richTextDisplayField(
          value: {
            /*a!richTextIcon(*/
            /*icon: if(*/
            /*and(*/
            /*not(*/
            /*a!isNullOrEmpty(ri!selectedCustomerData)*/
            /*),*/
            /*tostring(*/
            /*index(ri!selectedCustomerData, "email", null)*/
            /*) = tostring(index(fv!item, "email", null))*/
            /*),*/
            /*"compress-arrows",*/
            /*"expand"*/
            /*),*/
            /*link: a!dynamicLink(*/
            /*saveInto: if(*/
            /*tostring(*/
            /*index(ri!selectedCustomerData, "email", null)*/
            /*) <> tostring(index(fv!item, "email", null)),*/
            /*{*/
            /*a!save(ri!selectedCustomerData, fv!item),*/
            /*a!save(*/
            /*ri!selectedIndex,*/
            /*wherecontains(*/
            /*index(fv!item, "email", null),*/
            /*index(ri!customerData, "email", null)*/
            /*)*/
            /*)*/
            /*},*/
            /*a!save(*/
            /*{*/
            /*ri!selectedCustomerData,*/
            /*ri!selectedIndex*/
            /*},*/
            /*null*/
            /*)*/
            /*)*/
            /*),*/
            /*linkStyle: "STANDALONE",*/
            /*color: if(*/
            /*and(*/
            /*not(*/
            /*a!isNullOrEmpty(ri!selectedCustomerData)*/
            /*),*/
            /*tostring(*/
            /*index(ri!selectedCustomerData, "email", null)*/
            /*) = tostring(index(fv!item, "email", null))*/
            /*),*/
            /*"#008000",*/
            /*"#1F51FF"*/
            /*),*/
            /*size: "MEDIUM"*/
            /*)*/
            
          },
          align: "CENTER"
        ),
        a!imageField(
          images: a!documentImage(document: fv!item.documentImage),
          isThumbnail: true,
          size: "MEDIUM",
          style: "AVATAR",
          align: "CENTER"
        ),
        a!richTextDisplayField(
          value: {
            a!richTextItem(
              text: fv!item.name,
              style: "STRONG",
              link: a!dynamicLink(
                saveInto: if(
                  tostring(
                    index(ri!selectedCustomerData, "email", null)
                  ) <> tostring(index(fv!item, "email", null)),
                  {
                    a!save(ri!selectedCustomerData, fv!item),
                    a!save(
                      ri!selectedIndex,
                      wherecontains(
                        index(fv!item, "email", null),
                        index(ri!customerData, "email", null)
                      )
                    )
                  },
                  a!save(
                    {
                      ri!selectedCustomerData,
                      ri!selectedIndex
                    },
                    null
                  )
                )
              ),
              linkStyle: "STANDALONE"
            ),
            char(10),
            a!richTextItem(
              text: fv!item.position,
              size: "",
              style: "",
              color: "SECONDARY"
            )
          },
          align: "CENTER"
        ),
        a!richTextDisplayField(
          value: {
            /*a!richTextIcon(icon: "envelope", color: "ACCENT"),char(32),*/
            a!richTextItem(
              text: fv!item.email,
              link: a!safeLink(
                uri: concat("mailto:", fv!item.email),
                openLinkIn: "NEW_TAB"
              ),
              linkStyle: "STANDALONE",
              style: "STRONG"
            )
          },
          align: "CENTER"
        ),
        a!tagField(
          size: "STANDARD",
          tags: a!tagItem(
            text: fv!item.positionType,
            backgroundColor: if(
              contains(
                { "Full-time", "Part-time" },
                tostring(fv!item.positionType)
              ),
              "#365E32",
              "#BC7FCD"
            ),
            textColor: if(
              contains(
                { "Full-time", "Part-time" },
                tostring(fv!item.positionType)
              ),
              "#FFFFFF",
              "#FFFFFF"
            ),
            
          ),
          align: "CENTER"
        ),
        a!richTextDisplayField(
          value: {
            a!richTextItem(text: fv!item.company, style: "STRONG", ),
            char(10),
            a!richTextItem(
              text: fv!item.location,
              style: "",
              color: "SECONDARY"
            )
          },
          align: "CENTER"
        ),
        a!richTextDisplayField(
          value: a!richTextItem(
            text: concat(fv!item.experience, " years"),
            style: "STRONG"
          ),
          align: "CENTER"
        ),
        a!richTextDisplayField(
          label: "",
          labelPosition: "COLLAPSED",
          value: {
            a!richTextIcon(
              icon: "ellipsis-v",
              color: "SECONDARY",
              size: "MEDIUM",
              
            )
          },
          align: "LEFT"
        )
      }
    )
  ),
  shadeAlternateRows: false,
  borderStyle: "LIGHT",
  showWhen: if(
    ri!isSecondaryGrid = true(),
    if(
      a!isNullOrEmpty(value: ri!selectedIndex),
      false(),
      not(
        ri!selectedIndex = count(ri!customerData)
      )
    ),
    true()
  )
)