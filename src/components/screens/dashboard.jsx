import React from "react";
import {Link} from "react-router-dom";
import './dashboard.css';

class dashboard extends React.Component{
    render(){return(
        <div>
            <nav className="navbar fixed-top navbar-expand-md navbar-dark bg-primary mb-3">
                <div className="flex-row d-flex">
                    <button type="button" className="navbar-toggler mr-2 " data-toggle="offcanvas" title="Toggle responsive left sidebar">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="/dashboard" title="S4S">S4S</a>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse" id="collapsingNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">Home</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="//www.codeply.com">Link</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#myAlert" data-toggle="collapse">Alert</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="" data-target="#myModal" data-toggle="modal">About</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="container-fluid" id="main">
                <div className="row row-offcanvas row-offcanvas-left">
                    <div className="col-md-3 col-lg-2 sidebar-offcanvas bg-light pl-0" id="sidebar" role="navigation">
                        <ul className="nav flex-column sticky-top pl-0 pt-5 mt-3">
                            <li className="nav-item"><a className="nav-link" href="#">Menu</a></li>
                            <li className="nav-item">
                                <a className="nav-link" href="#submenu1" data-toggle="collapse" data-target="#submenu1">Reports▾</a>
                                <ul className="list-unstyled flex-column pl-3 collapse" id="submenu1" aria-expanded="false">
                                <li className="nav-item"><a className="nav-link" href="">Report 1</a></li>
                                <li className="nav-item"><a className="nav-link" href="">Report 2</a></li>
                                </ul>
                            </li>
                            <li className="nav-item"><a className="nav-link" href="#features">Upcoming Sessions</a></li>
                            <li className="nav-item"><a className="nav-link" href="#previousSessions">Previous Sessions</a></li>
                            <li className="nav-item"><a className="nav-link" href="#routines">Routines</a></li>
                            <li className="nav-item"><a className="nav-link" href="#prescriptions">Prescriptions</a></li>
                        </ul>
                    </div>

                    <div className="col main pt-5 mt-3">
                        <h1 className="display-4 d-none d-sm-block">
                        UserName
                        </h1>
                        <p className="lead d-none d-sm-block">Dashboard</p>

                        <div className="alert alert-warning fade collapse" role="alert" id="myAlert">
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                <span className="sr-only">Close</span>
                            </button>
                            <strong>Holy guacamole!</strong> It's free.. this is an example theme.
                        </div>
                        <div className="row mb-3">
                            <div className="col-xl-3 col-sm-6 py-2">
                                <div className="card bg-success text-white h-100">
                                    <div className="card-body bg-success">
                                        <div class="rotate">
                                            <i class="fa fa-user fa-4x"></i>
                                        </div>
                                        <h6 class="text-uppercase">Sessions</h6>
                                        <h1 class="display-4">134</h1>
                                    </div>
                                </div>
                            </div>
                            {/* <div class="col-xl-3 col-sm-6 py-2">
                                <div class="card text-white bg-danger h-100">
                                    <div class="card-body bg-danger">
                                        <div class="rotate">
                                            <i class="fa fa-list fa-4x"></i>
                                        </div>
                                        <h6 class="text-uppercase"></h6>
                                        <h1 class="display-4">87</h1>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-sm-6 py-2">
                                <div class="card text-white bg-info h-100">
                                    <div class="card-body bg-info">
                                        <div class="rotate">
                                            <i class="fa fa-twitter fa-4x"></i>
                                        </div>
                                        <h6 class="text-uppercase">Tweets</h6>
                                        <h1 class="display-4">125</h1>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-3 col-sm-6 py-2">
                                <div class="card text-white bg-warning h-100">
                                    <div class="card-body">
                                        <div class="rotate">
                                            <i class="fa fa-share fa-4x"></i>
                                        </div>
                                        <h6 class="text-uppercase">Shares</h6>
                                        <h1 class="display-4">36</h1>
                                    </div>
                                </div>
                            </div> */}
                        </div>

                        {/* <hr /> */}
                        {/* <div class="row placeholders mb-3">
                            <div class="col-6 col-sm-3 placeholder text-center">
                                <img src="//placehold.it/200/dddddd/fff?text=1" class="mx-auto img-fluid rounded-circle" alt="Generic placeholder thumbnail" />
                                <h4>Responsive</h4>
                                <span class="text-muted">Device agnostic</span>
                            </div>
                            <div class="col-6 col-sm-3 placeholder text-center">
                                <img src="//placehold.it/200/e4e4e4/fff?text=2" class="mx-auto img-fluid rounded-circle" alt="Generic placeholder thumbnail" />
                                <h4>Frontend</h4>
                                <span class="text-muted">UI / UX oriented</span>
                            </div>
                            <div class="col-6 col-sm-3 placeholder text-center">
                                <img src="//placehold.it/200/d6d6d6/fff?text=3" class="mx-auto img-fluid rounded-circle" alt="Generic placeholder thumbnail" />
                                <h4>HTML5</h4>
                                <span class="text-muted">Standards-based</span>
                            </div>
                            <div class="col-6 col-sm-3 placeholder text-center">
                                <img src="//placehold.it/200/e0e0e0/fff?text=4" class="center-block img-fluid rounded-circle" alt="Generic placeholder thumbnail" />
                                <h4>Framework</h4>
                                <span class="text-muted">CSS and JavaScript</span>
                            </div>
                        </div> */}

                        <a id="upcomingSessions"></a>
                        <hr />
                        <h1>Upcoming Sessions</h1>
                        <div>
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="ses-info">
                                        <h1>Session</h1>
                                        <p>Session about panic</p>
                                        <p>Date: 12-01-2021</p>
                                        <p>Duration: 50 min</p>
                                        <p>Outcome: Due to reason</p>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="ses-info">
                                        <h1>Session</h1>
                                        <p>Session about panic</p>
                                        <p>Date: 12-01-2021</p>
                                        <p>Duration: 50 min</p>
                                        <p>Outcome: Due to reason</p>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="ses-info">
                                        <h1>Session</h1>
                                        <p>Session about panic</p>
                                        <p>Date: 12-01-2021</p>
                                        <p>Duration: 50 min</p>
                                        <p>Outcome: Due to reason</p>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="ses-info">
                                        <h1>Session</h1>
                                        <p>Session about panic</p>
                                        <p>Date: 12-01-2021</p>
                                        <p>Duration: 50 min</p>
                                        <p>Outcome: Due to reason</p>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="ses-info">
                                        <h1>Session</h1>
                                        <p>Session about panic</p>
                                        <p>Date: 12-01-2021</p>
                                        <p>Duration: 50 min</p>
                                        <p>Outcome: Due to reason</p>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="ses-info">
                                        <h1>Session</h1>
                                        <p>Session about panic</p>
                                        <p>Date: 12-01-2021</p>
                                        <p>Duration: 50 min</p>
                                        <p>Outcome: Due to reason</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a id="previousSessions"></a>
                        <hr />
                        <h2 class="sub-header mt-5">Previous Sessions</h2>
                        <div>
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="ses-info">
                                        <h1>Session</h1>
                                        <p>Session about panic</p>
                                        <p>Date: 12-01-2021</p>
                                        <p>Duration: 50 min</p>
                                        <p>Outcome: Due to reason</p>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="ses-info">
                                        <h1>Session</h1>
                                        <p>Session about panic</p>
                                        <p>Date: 12-01-2021</p>
                                        <p>Duration: 50 min</p>
                                        <p>Outcome: Due to reason</p>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="ses-info">
                                        <h1>Session</h1>
                                        <p>Session about panic</p>
                                        <p>Date: 12-01-2021</p>
                                        <p>Duration: 50 min</p>
                                        <p>Outcome: Due to reason</p>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="ses-info">
                                        <h1>Session</h1>
                                        <p>Session about panic</p>
                                        <p>Date: 12-01-2021</p>
                                        <p>Duration: 50 min</p>
                                        <p>Outcome: Due to reason</p>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="ses-info">
                                        <h1>Session</h1>
                                        <p>Session about panic</p>
                                        <p>Date: 12-01-2021</p>
                                        <p>Duration: 50 min</p>
                                        <p>Outcome: Due to reason</p>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="ses-info">
                                        <h1>Session</h1>
                                        <p>Session about panic</p>
                                        <p>Date: 12-01-2021</p>
                                        <p>Duration: 50 min</p>
                                        <p>Outcome: Due to reason</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a id="routines"></a>
                        <hr />
                        <h2 class="mt-5">Routines</h2>
                        <h6>with Bootstrap 4 flexbox</h6>
                        <div>
                            <div className="row">
                                <div className="col-sm-3">
                                    <div className="ses-info">
                                        <h1>Session</h1>
                                        <p>Session about panic</p>
                                        <p>Date: 12-01-2021</p>
                                        <p>Duration: 50 min</p>
                                        <p>Outcome: Due to reason</p>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="ses-info">
                                        <h1>Session</h1>
                                        <p>Session about panic</p>
                                        <p>Date: 12-01-2021</p>
                                        <p>Duration: 50 min</p>
                                        <p>Outcome: Due to reason</p>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="ses-info">
                                        <h1>Session</h1>
                                        <p>Session about panic</p>
                                        <p>Date: 12-01-2021</p>
                                        <p>Duration: 50 min</p>
                                        <p>Outcome: Due to reason</p>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="ses-info">
                                        <h1>Session</h1>
                                        <p>Session about panic</p>
                                        <p>Date: 12-01-2021</p>
                                        <p>Duration: 50 min</p>
                                        <p>Outcome: Due to reason</p>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="ses-info">
                                        <h1>Session</h1>
                                        <p>Session about panic</p>
                                        <p>Date: 12-01-2021</p>
                                        <p>Duration: 50 min</p>
                                        <p>Outcome: Due to reason</p>
                                    </div>
                                </div>
                                <div className="col-sm-3">
                                    <div className="ses-info">
                                        <h1>Session</h1>
                                        <p>Session about panic</p>
                                        <p>Date: 12-01-2021</p>
                                        <p>Duration: 50 min</p>
                                        <p>Outcome: Due to reason</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        

                        {/*<a id="prescriptions"></a>
                        <hr />
                        <h2 class="sub-header mt-5">Prescriptions</h2>
                        <div class="row mb-3">
                            <div class="col-lg-6">

                                <div class="card mb-3">
                                    <div class="card-header">
                                        Bye .well, .panel &amp; .thumbnail
                                    </div>
                                    <div class="card-body">
                                        <h4 class="card-title">Replaced with .card</h4>
                                        <p class="card-text">All of these Bootstrap 3.x components have been dropped entirely for the new card component.</p>
                                        <button type="button" class="btn btn-secondary btn-lg">Large</button>
                                    </div>
                                </div>

                            </div>
                            <div class="col-lg-6">
                                <ul class="nav nav-tabs" role="tablist">
                                    <li class="nav-item">
                                        <a class="nav-link active" href="#home1" role="tab" data-toggle="tab">Home</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#profile1" role="tab" data-toggle="tab">Profile</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#messages1" role="tab" data-toggle="tab">Messages</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#settings1" role="tab" data-toggle="tab">Settings</a>
                                    </li>
                                </ul>

                                <div class="tab-content">
                                    <br />
                                    <div role="tabpanel" class="tab-pane active" id="home1">
                                        <h4>Home</h4>
                                        <p>
                                            1. These Bootstrap 4 Tabs work basically the same as the Bootstrap 3.x tabs.
                                            <br />
                                            <br />
                                            <button class="btn btn-primary-outline btn-lg">Wow</button>
                                        </p>
                                    </div>
                                    <div role="tabpanel" class="tab-pane" id="profile1">
                                        <h4>Pro</h4>
                                        <p>
                                            2. Tabs are helpful to hide or collapse some addtional content.
                                        </p>
                                    </div>
                                    <div role="tabpanel" class="tab-pane" id="messages1">
                                        <h4>Messages</h4>
                                        <p>
                                            3. You can really put whatever you want into the tab pane.
                                        </p>
                                    </div>
                                    <div role="tabpanel" class="tab-pane" id="settings1">
                                        <h4>Settings</h4>
                                        <p>
                                            4. Some of the Bootstrap 3.x components like well and panel have been dropped for the new card component.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="clearfix"></div>
                            <div class="col-lg-6">
                                <div class="card card-default card-body">
                                    <ul id="tabsJustified" class="nav nav-tabs nav-justified">
                                        <li class="nav-item">
                                            <a class="nav-link" href="" data-target="#tab1" data-toggle="tab">List</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link active" href="" data-target="#tab2" data-toggle="tab">Profile</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="" data-target="#tab3" data-toggle="tab">More</a>
                                        </li>
                                    </ul>
                                    <br />
                                    <div id="tabsJustifiedContent" class="tab-content">
                                        <div class="tab-pane" id="tab1">
                                            <div class="list-group">
                                                <a href="" class="list-group-item"><span class="float-right label label-success">51</span> Home Link</a>
                                                <a href="" class="list-group-item"><span class="float-right label label-success">8</span> Link 2</a>
                                                <a href="" class="list-group-item"><span class="float-right label label-success">23</span> Link 3</a>
                                                <a href="" class="list-group-item text-muted">Link n..</a>
                                            </div>
                                        </div>
                                        <div class="tab-pane active" id="tab2">
                                            <div class="row">
                                                <div class="col-sm-7">
                                                    <h4>Profile Section</h4>
                                                    <p>Imagine creating this simple user profile inside a tab card.</p>
                                                </div>
                                                <div class="col-sm-5"><img src="//placehold.it/170" class="float-right img-responsive img-rounded" /></div>
                                            </div>
                                            <hr />
                                            <a href="javascript:;" class="btn btn-info btn-block">Read More Profiles</a>
                                            <div class="spacer5"></div>
                                        </div>
                                        <div class="tab-pane" id="tab3">
                                            <div class="list-group">
                                                <a href="" class="list-group-item"><span class="float-right label label-info label-pill">44</span> <code>.panel</code> is now <code>.card</code></a>
                                                <a href="" class="list-group-item"><span class="float-right label label-info label-pill">8</span> <code>.nav-justified</code> is deprecated</a>
                                                <a href="" class="list-group-item"><span class="float-right label label-info label-pill">23</span> <code>.badge</code> is now <code>.label-pill</code></a>
                                                <a href="" class="list-group-item text-muted">Message n..</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div id="accordion" role="tablist" aria-multiselectable="true">
                                <div class="card">
                                    <div class="card-header" role="tab" id="headingOne"  data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                        Accordion example
                                    </div>
                                    <div id="collapseOne" class="card-block collapse in" role="tabpanel" aria-labelledby="headingOne">
                                        <p>This is a Bootstrap 4 accordion that uses the <code>.card</code> classes instead of <code>.panel</code>. The single-open section aspect is not working because the parent option (dependent on .panel) has not yet been finalized in BS 4 alpha. </p>
                                    </div>
                                    <div class="card-header" role="tab" id="headingTwo" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                        Mobile-first
                                    </div>
                                    <div id="collapseTwo" class="card-block collapse" role="tabpanel" aria-labelledby="headingTwo">
                                        <p>Just like it's predecesor, Bootstrap 4 is mobile-first so that you start by designing for smaller devices such as smartphones and tablets, then proceed to laptop and desktop layouts.</p>
                                    </div>
                                    <div class="card-header" role="tab" id="headingThree"  data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                        Built for CSS3
                                    </div>
                                    <div id="collapseThree" class="card-block collapse" role="tabpanel" aria-labelledby="headingThree">
                                        <p>Bootstrap employs a handful of important global styles and settings that you’ll need to be aware of when using it, all of which are almost exclusively geared towards the normalization of cross browser styles.</p>
                                    </div>
                                </div>
                                </div>
                                <p class="mt-4">
                                    <a href="/go/KrUO8QpyXP/bootstrao-4-dashboard" target="_ext">Get this Bootstrap 4 admin dashboard at Codeply</a>
                                </p>
                            </div>
                        </div>

                    </div>
                </div> */}
            </div>
            </div>
            <footer class="container-fluid">
                <p class="text-right small">©2016-2018 Company</p>
            </footer>


            <div class="modal fade" id="myModal" tabindex="-1" role="dialog">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title" id="myModalLabel">Modal</h4>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                                <span class="sr-only">Close</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <p>This is a dashboard layout for Bootstrap 4. This is an example of the Modal component which you can use to show content.
                            Any content can be placed inside the modal and it can use the Bootstrap grid classes.</p>
                            <p>
                                <a href="https://www.codeply.com/go/KrUO8QpyXP" target="_ext">Grab the code at Codeply</a>
                            </p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary-outline" data-dismiss="modal">OK</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );}
}

export default dashboard;