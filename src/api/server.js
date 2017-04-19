import axios from 'axios'

// TMP projects
const projects = [
    {id: 1, name: 'Human Rights Watch', funds: '£14.000', icon: 'functions', lat: 51.522, lng: -0.089},
    {id: 2, name: 'Do Something', funds: '£55.000', icon: 'person', lat: 51.52, lng: -0.08},
    {id: 3, name: 'World Wildlife Fund', funds: '£22.000', icon: 'star', lat: 51.52, lng: -0.082},
    {id: 4, name: 'Caritas', funds: '£5.000', icon: 'star', lat: 51.523, lng: -0.085}
];

export default {
  getProjects: (cb, timeout) => {
      axios.get('/api/projects')
      .then((res) => cb(null, res.data))
      .catch((e) => cb(e))
    // cb(null, projects)
  },
  addProject: (values, cb, timeout) => {
      axios.post('/api/project', values)
      .then((res) => cb(null, res.data))
      .catch((e) => cb(e))
  }
}
