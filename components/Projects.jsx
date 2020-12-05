import React from "react";

export default class Projects extends React.Component {
    constructor(props){
        super(props);
        this.state={
            projects: props.projects,
            project: 0
        };
        this.pProject = this.pProject.bind(this);
        this.nProject = this.nProject.bind(this);
    }

    pProject(){
      this.setState({project: this.state.project - 1})
    }
    nProject(){
        this.setState({project: this.state.project + 1})
    }

    render(){
        return(
            <div className="container m-auto mt-5 ">
                <div className="flex space-x-6">
                    {this.state.project != 0 &&
                    <div className="flex-0">
                        <img src="/Arrow2.png" className="mt-72" onClick={this.pProject}/>
                    </div>
                    }
                    <div className="jumbo p-5 flex-1">
                        <h1 className="text-left text-5xl text-white stroke">{this.state.projects[this.state.project].title}</h1>
                        <p className="text-lg text-white">
                            {this.state.projects[this.state.project].description}
                        </p>
                        <a href={this.state.projects[this.state.project].link}>
                            <img src="/link.png" className="w-14" />
                        </a>
                    </div>
                    <div className="flex-1">
                        <img src={this.state.projects[this.state.project].img} className="image"/>
                    </div>
                    {this.state.project != this.state.projects.length - 1 &&
                    <div className="flex-0">
                        <img src="/Arrow.png" className="mt-72" onClick={this.nProject}/>
                    </div>
                    }
                </div>
            </div>
        )
    }
}