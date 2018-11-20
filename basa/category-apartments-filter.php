<? include("header.php") ?>
	<main class="category-apartments-filter">
		<div class="category-apartments-wrapper">
			<a href="#" class="basa-btn mobile-filter-btn">Фильтр</a>
			<div class="top-row-filter-container">
				<form id="top-row-filter" action="#" method="POST">
					<div class="top-row-filter-wrapper">
						<h3 class="filter-name top-filter-name">Очередь</h3>
						<ul class="stage-filter-list" id="stage-filter">
							<li>
								<input data-value="1" type="checkbox" checked="checked" name="stage-1" id="stage-1">
								<label for="stage-1">1</label>
							</li>
							<li>
								<input data-value="2" type="checkbox" name="stage-2" id="stage-2">
								<label for="stage-2">2</label>
							</li>						
						</ul>
						<ul class="apartment-type-list" id="apartment-type-filter">
							<li>
								<input data-value="cityhouses" type="checkbox" name="cityhouses" id="cityhouses">
								<span class="checkbox-decorate">
									<span></span>
								</span>
								<label for="cityhouses">Ситихаусы</label>								
							</li>
							<li>
								<input data-value="terrace" type="checkbox" name="terrace" id="terrace">
								<span class="checkbox-decorate">
									<span></span>
								</span>								
								<label for="terrace">Квартиры с терассой</label>								
							</li>
							<li>
								<input data-value="lofts" type="checkbox" name="lofts" id="lofts">
								<span class="checkbox-decorate">
									<span></span>
								</span>								
								<label for="lofts">Лофты</label>								
							</li>														
						</ul>						
					</div>
				</form>
			</div>
			<div class="cat-apartments-left-col">
				<div class="back-genplan-btn">
					<div class="back-clear-btns">
						<a href="javascript:history.go(-1)" id="back-btn" class="back-genplan"></a>
						<a href="page-genplan.php" id="back-genplan-btn" class="clear-genplan"></a>
					</div>
					<span class="back-text">ВЕРНУТЬСЯ НАЗАД</span>
					<span class="back-genplan-text">ВЕРНУТЬСЯ К ГЕНПЛАНУ</span>
				</div>
				<div class="left-col-filter-container">
					<form id="left-col-filter" action="#" method="POST">
						<h3 class="filter-name">СЕКЦИЯ</h3>
						<ul class="section-filter" id="section-filter">
							<li>
								<input data-value="1" type="checkbox" name="section-1" id="section-1">
								<label for="section-1">1</label>
							</li>
							<li>
								<input data-value="2" type="checkbox" name="section-2" id="section-2">
								<label for="section-2">2</label>
							</li>
							<li>
								<input data-value="3" type="checkbox" name="section-3" id="section-3">
								<label for="section-3">3</label>
							</li>
							<li>
								<input data-value="4" type="checkbox" name="section-4" id="section-4">
								<label for="section-4">4</label>
							</li>
							<li>
								<input data-value="5" type="checkbox" name="section-5" id="section-5">
								<label for="section-5">5</label>
							</li>																								
						</ul>
						<h3 class="filter-name">ЭТАЖ</h3>
						<ul class="section-filter" id="floor-filter">
							<li>
								<input data-value="1" type="checkbox" name="floor-1" id="floor-1">
								<label for="floor-1">1</label>
							</li>
							<li>
								<input data-value="2" type="checkbox" name="floor-2" id="floor-2">
								<label for="floor-2">2</label>
							</li>
							<li>
								<input data-value="3" type="checkbox" name="floor-3" id="floor-3">
								<label for="floor-3">3</label>
							</li>
							<li>
								<input data-value="4" type="checkbox" name="floor-4" id="floor-4">
								<label for="floor-4">4</label>
							</li>
							<li>
								<input data-value="5" type="checkbox" name="floor-5" id="floor-5">
								<label for="floor-5">5</label>
							</li>
							<li>
								<input data-value="6" type="checkbox" name="floor-6" id="floor-6">
								<label for="floor-6">6</label>
							</li>																				
						</ul>						
						<h3 class="filter-name">КОЛИЧЕСТВО КОМНАТ</h3>
						<ul class="section-filter" id="number-of-rooms-filter">
							<li>
								<input data-value="1" type="checkbox" name="rooms-1" id="rooms-1">
								<label for="rooms-1">1</label>
							</li>
							<li>
								<input data-value="2" type="checkbox" name="rooms-2" id="rooms-2">
								<label for="rooms-2">2</label>
							</li>
							<li>
								<input data-value="3" type="checkbox" name="rooms-3" id="rooms-3">
								<label for="rooms-3">3</label>
							</li>																			
						</ul>
						<h3 class="filter-name">ПЛОЩАДЬ КВ.М</h3>
						<div class="filter-container" id="square-filter">
							<input min="40" max="120" value="0,120" step="10" name="square" type="range" multiple />
							<div class="fiter-range-results">
								<span class="val-range" id="val-range-squareL">40</span>
								<span class="val-range" id="val-range-squareR">120</span>						
							</div>						
						</div>									
					</form>
				</div>
			</div>
			<div class="cat-apartments-main-col">
				<section class="apartments-filter-result">
					<ul class="apartments-filter-result-list">
						<li class="animation-element-list">
							<a href="single-apartment.php">
								<div class="aprtm-thubnail-container">
									<img src="img/apartment-scheme/С3-1КП-1.5-thumb.svg" alt="">
								</div>
								<div class="aprtm-descr-container">
									<span class="appart-id" id="appart-id">03-02</span>
									<span>3 комнаты</span>
									<span>4 этаж</span>
									<span>1 очередь, 2 секция</span>
								</div>
							</a>
						</li>
						<li class="animation-element-list">
							<a href="single-apartment.php">
								<div class="aprtm-thubnail-container">
									<img src="img/apartment-scheme/С3-1КП-1.5-thumb.svg" alt="">
								</div>
								<div class="aprtm-descr-container">
									<span class="appart-id" id="appart-id">03-02</span>
									<span>3 комнаты</span>
									<span>4 этаж</span>
									<span>1 очередь, 2 секция</span>
								</div>
							</a>
						</li>
						<li class="animation-element-list">
							<a href="single-apartment.php">
								<div class="aprtm-thubnail-container">
									<img src="img/apartment-scheme/С3-1КП-1.5-thumb.svg" alt="">
								</div>
								<div class="aprtm-descr-container">
									<span class="appart-id" id="appart-id">03-02</span>
									<span>3 комнаты</span>
									<span>4 этаж</span>
									<span>1 очередь, 2 секция</span>
								</div>
							</a>
						</li>
						<li class="animation-element-list">
							<a href="#">
								<div class="aprtm-thubnail-container">
									<img src="img/apartment-scheme/С3-1КП-1.5-thumb.svg" alt="">
								</div>
								<div class="aprtm-descr-container">
									<span class="appart-id" id="appart-id">03-02</span>
									<span>3 комнаты</span>
									<span>4 этаж</span>
									<span>1 очередь, 2 секция</span>
								</div>
							</a>
						</li>
						<li class="animation-element-list">
							<a href="#">
								<div class="aprtm-thubnail-container">
									<img src="img/apartment-scheme/С3-1КП-1.5-thumb.svg" alt="">
								</div>
								<div class="aprtm-descr-container">
									<span class="appart-id" id="appart-id">03-02</span>
									<span>3 комнаты</span>
									<span>4 этаж</span>
									<span>1 очередь, 2 секция</span>
								</div>
							</a>
						</li>
						<li class="animation-element-list">
							<a href="#">
								<div class="aprtm-thubnail-container">
									<img src="img/apartment-scheme/С3-1КП-1.5-thumb.svg" alt="">
								</div>
								<div class="aprtm-descr-container">
									<span class="appart-id" id="appart-id">03-02</span>
									<span>3 комнаты</span>
									<span>4 этаж</span>
									<span>1 очередь, 2 секция</span>
								</div>
							</a>
						</li>
						<li class="animation-element-list">
							<a href="#">
								<div class="aprtm-thubnail-container">
									<img src="img/apartment-scheme/С3-1КП-1.5-thumb.svg" alt="">
								</div>
								<div class="aprtm-descr-container">
									<span class="appart-id" id="appart-id">03-02</span>
									<span>3 комнаты</span>
									<span>4 этаж</span>
									<span>1 очередь, 2 секция</span>
								</div>
							</a>
						</li>
						<li class="animation-element-list">
							<a href="#">
								<div class="aprtm-thubnail-container">
									<img src="img/apartment-scheme/С3-1КП-1.5-thumb.svg" alt="">
								</div>
								<div class="aprtm-descr-container">
									<span class="appart-id" id="appart-id">03-02</span>
									<span>3 комнаты</span>
									<span>4 этаж</span>
									<span>1 очередь, 2 секция</span>
								</div>
							</a>
						</li>
						<li class="animation-element-list">
							<a href="#">
								<div class="aprtm-thubnail-container">
									<img src="img/apartment-scheme/С3-1КП-1.5-thumb.svg" alt="">
								</div>
								<div class="aprtm-descr-container">
									<span class="appart-id" id="appart-id">03-02</span>
									<span>3 комнаты</span>
									<span>4 этаж</span>
									<span>1 очередь, 2 секция</span>
								</div>
							</a>
						</li>																							
					</ul>
				</section>
			</div>			
		</div>
		<div class="mobile-filter-window">
			<div class="mobile-filter-window-wrapper"></div>
			<span class="close-mobile-filter"></span>
			<span class="apply-filter-btn">ПРИМЕНИТЬ ФИЛЬТР</span>
		</div>
	</main>
<? include("footer-content.php") ?>
<? include("footer.php") ?>		