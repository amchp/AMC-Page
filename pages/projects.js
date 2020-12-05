import React from 'react';
import Projects from "../components/Projects"
import api from '../lib/api'

class ProjectsPage extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: null,
      error: null
    }
    this.fetchData()
  }
  
  fetchData = async () => {
    try {
      const response = await api.projects.getProjects()
      this.setState({ data: response, loading: false })
    } catch (error) {
      this.setState({ loading: false, error: error })
    }
  }
  
  render(){
    if (this.state.loading == true) {
      return (
        <h1>loading</h1>
      )
    }
    else{
      return (
        <Projects projects={this.state.data}/>
      )
    }
  }
}

export default ProjectsPage;