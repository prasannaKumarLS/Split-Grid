with(
  local!currentCount: count(ri!data),
  local!currentIndex: if(
    tointeger(local!currentCount) = 0,
    null(),
    if(
      ri!isSecondaryGrid = true(),
      if(
        a!isNullOrEmpty(value: ri!selectedIndex),
        null(),
        {
          if(
            ri!selectedIndex >= local!currentCount,
            "",
            enumerate(local!currentCount - ri!selectedIndex) + ri!selectedIndex + 1
          )
        }
      ),
      if(
        a!isNullOrEmpty(value: ri!selectedIndex),
        enumerate(local!currentCount) + 1,
        { enumerate(ri!selectedIndex) + 1 }
      )
    )
  ),
  if(
    a!isNullOrEmpty(value: local!currentIndex),
    null(),
    index(ri!data, local!currentIndex, null())
  )
)