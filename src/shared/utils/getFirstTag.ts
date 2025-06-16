const getFirstTag = (tags: string) => {
  const firstTag = tags.split(' ')[0]
  return firstTag[0].toUpperCase() + firstTag.slice(1, firstTag.length)
}

export default getFirstTag
