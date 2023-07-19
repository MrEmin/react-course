import { createClient } from 'contentful'

const client = createClient({
  space: '',
  environment: 'master',
  accessToken: '',
})

client
  .getEntries({ content_type: 'projects' })
  .then((response) => console.log(response))
