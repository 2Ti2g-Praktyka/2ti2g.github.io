document.write(`
		<nav class="navbar navbar-expand-xl sticky-top">

			<div class="container-fluid">

				<a class="navbar-brand ms-1" href="../index.html">
					<img src="../img/favicon.png" width="40" height="40" alt="" class="d-inline-block align-bottom">
				</a>

				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span role="button">
						<i class="icon-menu"></i>
					</span>
				</button>

				<div class="collapse navbar-collapse" id="navbarNav">

					<ul class="navbar-nav mx-auto">

						<li class="nav-item">
							<a class="nav-link" href="../index.html">
								Start
							</a>
						</li>

						<li class="nav-item dropdown">
							<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
								Materiały
							</a>
							
							<ul class="dropdown-menu text-center mt-lg-1" aria-labelledby="navbarDropdown">
								<li><a class="dropdown-item" href="algebra-boolea.html">Algebra Boole'a</a></li>
								<li><a class="dropdown-item" href="bramki-logiczne.html">Bramki Logiczne</a></li>
								<li><a class="dropdown-item" href="uklady-cyfrowe.html">Układy Cyfrowe</a></li>
							</ul>
						</li>

						<li class="nav-item">
							<a class="nav-link" href="o-projekcie.html">
								O projekcie
							</a>
						</li>

                        <li class="nav-item">
                            <a class="nav-link" href="narzedzia.html">
                                Narzędzia
                            </a>
                        </li>

					</ul>

				</div>

			</div>

		</nav>
`);