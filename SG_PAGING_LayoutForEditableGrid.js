if(
  and(
    ri!totalCount > index(
      ri!pagingInfo,
      "batchSize",
      null()
    ),
    index(
      ri!pagingInfo,
      "batchSize",
      null()
    ) > 0
  ),
  with(
    local!previousDisabled: index(
      ri!pagingInfo,
      "startIndex",
      null()
    ) = 1,
    local!nextDisabled: or(
      index(
        ri!pagingInfo,
        "startIndex",
        null()
      ) + index(
        ri!pagingInfo,
        "batchSize",
        null()
      ) > ri!totalCount,
      index(
        ri!pagingInfo,
        "batchSize",
        null()
      ) = - 1
    ),
    a!richTextDisplayField(
      labelPosition: "COLLAPSED",
      align: "RIGHT",
      value: {
        a!richTextItem(
          text: char(
            12298
          ),
          style: "STRONG",
          linkStyle: "STANDALONE",
          link: if(
            local!previousDisabled,
            null,
            a!dynamicLink(
              value: 1,
              saveInto: {
                ri!pagingInfo.startIndex,
                ri!addSaveIntos
              }
            )
          )
        ),
        a!richTextItem(
          text: "  "
        ),
        a!richTextItem(
          text: char(
            12296
          ),
          style: "STRONG",
          linkStyle: "STANDALONE",
          link: if(
            local!previousDisabled,
            null,
            a!dynamicLink(
              value: index(
                ri!pagingInfo,
                "startIndex",
                null
              ) - index(
                ri!pagingInfo,
                "batchSize",
                null
              ),
              saveInto: {
                ri!pagingInfo.startIndex,
                ri!addSaveIntos
              }
            )
          )
        ),
        a!richTextItem(
          text: "  "
        ),
        a!richTextItem(
          text: index(
            ri!pagingInfo,
            "startIndex",
            null
          ) & " - " & if(
            index(
              ri!pagingInfo,
              "batchSize",
              null
            ) = - 1,
            ri!totalCount,
            min(
              ri!totalCount - index(
                ri!pagingInfo,
                "startIndex",
                null
              ) + 1,
              index(
                ri!pagingInfo,
                "batchSize",
                null
              )
            ) - 1 + index(
              ri!pagingInfo,
              "startIndex",
              null
            )
          ),
          style: "STRONG"
        ),
        " of " & ri!totalCount,
        a!richTextItem(
          text: "  "
        ),
        a!richTextItem(
          text: char(
            12297
          ),
          style: "STRONG",
          linkStyle: "STANDALONE",
          link: if(
            local!nextDisabled,
            null,
            a!dynamicLink(
              value: index(
                ri!pagingInfo,
                "startIndex",
                null
              ) + index(
                ri!pagingInfo,
                "batchSize",
                null
              ),
              saveInto: {
                ri!pagingInfo.startIndex,
                ri!addSaveIntos
              }
            )
          )
        ),
        a!richTextItem(
          text: "  "
        ),
        a!richTextItem(
          text: char(
            12299
          ),
          style: "STRONG",
          linkStyle: "STANDALONE",
          link: if(
            local!nextDisabled,
            null,
            a!dynamicLink(
              value: if(
                mod(
                  ri!totalCount,
                  index(
                    ri!pagingInfo,
                    "batchSize",
                    null
                  ),

                ) = 0,
                if(
                  index(
                    ri!pagingInfo,
                    "startIndex",
                    null
                  ) = ri!totalCount - index(
                    ri!pagingInfo,
                    "batchSize",
                    null
                  ),
                  index(
                    ri!pagingInfo,
                    "startIndex",
                    null
                  ) + index(
                    ri!pagingInfo,
                    "batchSize",
                    null
                  ),
                  ri!totalCount - index(
                    ri!pagingInfo,
                    "batchSize",
                    null
                  ) + index(
                    ri!pagingInfo,
                    "startIndex",
                    null
                  )
                ),
                ri!totalCount - mod(
                  ri!totalCount,
                  index(
                    ri!pagingInfo,
                    "batchSize",
                    null
                  )
                ) + 1
              ),
              saveInto: {
                ri!pagingInfo.startIndex,
                ri!addSaveIntos
              }
            )
          )
        )
      },
      showWhen: ri!showWhen
    )
  ),
  {}
)