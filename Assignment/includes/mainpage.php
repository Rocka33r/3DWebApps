
<div id="home">
    <div class="row">
        <div class="col-sm-12">
            <div id="main_3d_image">
                <div id="main_text" >
                    <h2 id="main_title"><?php echo $data['cards']['mainPage']['title']?></h2>
                    <h3 id="main_subtitle"><?php echo $data['cards']['mainPage']['subTitle']?></h3>
                    <p id="main_description"><?php echo $data['cards']['mainPage']['text']?></p>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-sm-4">
            <div class="card brand-card">
                <a href="javascript:showModel('coke')">
                    <img class="card-img-top img-fluid img-thumbnail" src="./assets/images/site_images/colaPromo.jpg" alt="Coca Cola">
                </a>
                <div class="card-body">
                    <div class="card-title">
                        <h2 id="coke_title"><?php echo $data['brands']['coke']['title']?></h2>
                    </div>
                    <div class="card-subtitle">
                        <h3 id="coke_subtitle"><?php echo $data['brands']['coke']['subtitle']?></h3>
                    </div>
                    <div class="card-text">
                        <p id="coke_description"><?php echo $data['brands']['coke']['description']?></p>
                    </div>
                </div>
                <div class="card-footer"><a href="http://www.coca-cola.co.uk/drinks/coca-cola/coca-cola" class="btn main-colour find-out-more-button" target="_blank">More Info...</a>
                </div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card brand-card">
                <a href="javascript:showModel('sprite')">
                    <img class="card-img-top img-fluid img-thumbnail" src="./assets/images/site_images/spritePromo.jpg" alt="Sprite">
                </a>
                <div class="card-body">
                    <div class="card-title">
                        <h2 id="sprite_title"><?php echo $data['brands']['sprite']['title']?></h2>
                    </div>
                    <div class="card-subtitle">
                        <h3 id="sprite_subtitle"><?php echo $data['brands']['sprite']['subtitle']?></h3>
                    </div>
                    <div class="card-text">
                        <p id="sprite_description"><?php echo $data['brands']['sprite']['description']?></p>
                    </div>
                </div>
                <div class="card-footer"><a href="http://www.coca-cola.co.uk/drinks/sprite/sprite" class="btn main-colour find-out-more-button" target="_blank">More Info...</a></div>
            </div>
        </div>
        <div class="col-sm-4">
            <div class="card brand-card">
                <a href="javascript:showModel('fanta')">
                    <img class="card-img-top img-fluid img-thumbnail" src="./assets/images/site_images/fantaPromo.jpg" alt="Fanta">
                </a>
                <div class="card-body">
                    <div class="card-title">
                        <h2 id="fanta_title"><?php echo $data['brands']['fanta']['title']?></h2>
                    </div>
                    <div class="card-subtitle">
                        <h3 id="fanta_subtitle"><?php echo $data['brands']['fanta']['subtitle']?></h3>
                    </div>
                    <div class="card-text">
                        <p id="fanta_description"><?php echo $data['brands']['fanta']['description']?></p>
                    </div>
                </div>
                <div class="card-footer"><a href="https://www.fanta.com/" class="btn main-colour find-out-more-button" target="_blank">More Info...</a></div>
            </div>
        </div>
    </div>
</div>