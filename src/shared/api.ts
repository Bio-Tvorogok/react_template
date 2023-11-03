import axios from 'axios'

export const fetchTemplate = async () => {
  return (await axios.get('../template.json')).data
}