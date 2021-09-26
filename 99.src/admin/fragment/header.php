<style>
    #temp-form {
        margin-left: auto !important;
    }
    .dropdown-menu.dropdown-menu-right.show {
        right: 0 !important;
        left: auto !important;
    }
</style>
<body class="sb-nav-fixed">
    <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
        <a class="navbar-brand" href="index.php" style="text-align: center;">돈믈리에</a>
        <button class="btn btn-link btn-sm order-1 order-lg-0" id="sidebarToggle" href="#"><i class="fas fa-bars"></i></button>
        <!-- Navbar Search-->
        <form class="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-3 my-2 my-md-0" id="temp-form">
            
            <!-- <div class="input-group">
                <input class="form-control" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
                <div class="input-group-append">
                    <button class="btn btn-primary" type="button"><i class="fas fa-search"></i></button>
                </div>
            </div> -->
           
        </form>
        <!-- Navbar-->
        <ul class="navbar-nav ml-auto ml-md-0">
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" id="userDropdown" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fas fa-user fa-fw"></i></a>
                <div class="dropdown-menu dropdown-menu-right" aria-labelledby="userDropdown">
                    <a class="dropdown-item" href="./change_password.php">비밀번호 변경</a>
                    <div class="dropdown-divider"></div>
                    <form id="logoutForm" name="logoutForm" method="post" action="./action/logout.php">
                        <button type="submit" class="dropdown-item btn btn-outline-dark">로그아웃</button>
                    </form>
                </div>
            </li>
        </ul>
    </nav>