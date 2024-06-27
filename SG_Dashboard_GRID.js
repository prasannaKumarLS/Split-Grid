a!localVariables(
  local!allData: rule![SG_TEST_DATA_CustomerInformation](https://github.com/prasannaKumarLS/Split-Grid/blob/main/SG_PAGING_LayoutForEditableGrid.js)(),
  local!pagingInfo: a!pagingInfo(
    startIndex: 1,
    batchSize: 10,
    sort: a!sortInfo(field: "id", ascending: true)
  ),
  /*Configure the pagingInfo into the customerData query*/
  local!customerData: todatasubset(local!allData, local!pagingInfo).data,
  local!selectedIndex,
  local!selectedCustomerData,
  a!cardLayout(
    contents: {
      a!richTextDisplayField(
        value: a!richTextItem(
          text: "Candidates",
          size: "MEDIUM",
          style: "STRONG"
        )
      ),
      rule!SG_SEC_GRID_CustomerInformation(
        isSecondaryGrid: false,
        customerData: local!customerData,
        selectedIndex: local!selectedIndex,
        selectedCustomerData: local!selectedCustomerData
      ),
      rule!SG_SEC_selectedCustomerInformation(
        selectedIndex: local!selectedIndex,
        selectedCustomerData: local!selectedCustomerData
      ),
      rule!SG_SEC_GRID_CustomerInformation(
        isSecondaryGrid: true,
        customerData: local!customerData,
        selectedIndex: local!selectedIndex,
        selectedCustomerData: local!selectedCustomerData
      ),
      rule!SG_PAGING_LayoutForEditableGrid(
        pagingInfo: local!pagingInfo,
        addSaveIntos: {
          a!save(
            {
              local!selectedIndex,
              local!selectedCustomerData
            },
            null
          )
        },
        totalCount: count(local!allData)
      )
    },
    shape: "ROUNDED",
    showBorder: false,
    style: "#E8F0F7",
    showShadow: true
  )
)
