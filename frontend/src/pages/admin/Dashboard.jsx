const AdminDashboard = () => {
    return (
        <div class="main-container">
			<div class="pd-ltr-20 xs-pd-20-10">
				<div class="min-height-200px">
					{/* <div class="page-header">
						<div class="row">
							<div class="col-md-6 col-sm-12">
								<div class="title">
									<h4>Basic Tables</h4>
								</div>
								<nav aria-label="breadcrumb" role="navigation">
									<ol class="breadcrumb">
										<li class="breadcrumb-item">
											<a href="/">Home</a>
										</li>
										<li class="breadcrumb-item active" aria-current="page">
											Basic Tables
										</li>
									</ol>
								</nav>
							</div>
							<div class="col-md-6 col-sm-12 text-right">
								<div class="dropdown">
									<a class="btn btn-primary dropdown-toggle" href="#" role="button" data-toggle="dropdown">
										January 2018
									</a>
									<div class="dropdown-menu dropdown-menu-right">
										<a class="dropdown-item" href="#">Export List</a>
										<a class="dropdown-item" href="#">Policies</a>
										<a class="dropdown-item" href="#">View Assets</a>
									</div>
								</div>
							</div>
						</div> */}
					{/* </div> */}
					<div class="pd-20 card-box mb-30">
						<div class="clearfix mb-20">
							<div class="pull-left">
								<h4 class="text-blue h4">Striped table</h4>
								<p>
									Add <code>.table .table-striped</code> to add zebra-striping
									to any table row within the <code>&lt;tbody&gt;</code>.
								</p>
							</div>
							<div class="pull-right">
								<a href="#striped-table" class="btn btn-primary btn-sm scroll-click" rel="content-y" data-toggle="collapse" role="button" aria-expanded="true"><i class="fa fa-code"></i> Source Code</a>
							</div>
						</div>
						<table class="table table-striped">
							<thead>
								<tr>
									<th scope="col">#</th>
									<th scope="col">First</th>
									<th scope="col">Last</th>
									<th scope="col">Handle</th>
									<th scope="col">Tag</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th scope="row">1</th>
									<td>Mark</td>
									<td>Otto</td>
									<td>@mdo</td>
									<td><span class="badge badge-primary">Primary</span></td>
								</tr>
								<tr>
									<th scope="row">2</th>
									<td>Jacob</td>
									<td>Thornton</td>
									<td>@fat</td>
									<td><span class="badge badge-secondary">Secondary</span></td>
								</tr>
								<tr>
									<th scope="row">3</th>
									<td>Larry</td>
									<td>the Bird</td>
									<td>@twitter</td>
									<td><span class="badge badge-success">Success</span></td>
								</tr>
								<tr>
									<th scope="row">2</th>
									<td>Jacob</td>
									<td>Thornton</td>
									<td>@fat</td>
									<td><span class="badge badge-secondary">Secondary</span></td>
								</tr>
								<tr>
									<th scope="row">3</th>
									<td>Larry</td>
									<td>the Bird</td>
									<td>@twitter</td>
									<td><span class="badge badge-success">Success</span></td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
				<div class="footer-wrap pd-20 mb-20 card-box">
					DeskApp - Bootstrap 4 Admin Template By
					<a href="https://github.com/dropways" target="_blank">Ankit Hingarajiya</a>
				</div>
			</div>
		</div>
    )
}

export default AdminDashboard