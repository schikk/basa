<? include("header.php") ?>
	<main class="category-sections-floors">
		<div class="sections-floors-sorting-col">
			<div class="section-sorting-col">
				<h3>СЕКЦИЯ</h3>
				<ul class="section-sorting-list">
					<li>
						<a href="#">1</a>
					</li>
					<li>
						<a href="#">2</a>
					</li>
					<li class="current">
						<a href="#">3</a>
					</li>
					<li>
						<a href="#">4</a>
					</li>
					<li>
						<a href="#">5</a>
					</li>																								
				</ul>
			</div>
			<div class="floors-sorting-col">
				<h3>ЭТАЖ</h3>
				<ul class="floors-sorting-list">
					<li class="current">
						<a href="#">1</a>
					</li>
					<li>
						<a href="#">2-6</a>
					</li>
					<li>
						<a href="#">7</a>
					</li>										
				</ul>
			</div>
		</div>
		<div class="main-apartments-col">
			<div class="back-genplan-btn">
				<div class="back-clear-btns">
					<a href="javascript:history.go(-1)" id="back-btn" class="back-genplan"></a>
					<a href="page-genplan.php" id="back-genplan-btn" class="clear-genplan"></a>
				</div>
				<span class="back-text">ВЕРНУТЬСЯ НАЗАД</span>
				<span class="back-genplan-text">ВЕРНУТЬСЯ К ГЕНПЛАНУ</span>
			</div>
			<section class="floor-result-container animation-element">
				<div class="floor-plan" id="floor-plan">
					<svg viewBox="0 0 649 501" style="background-image: url(img/apartment-scheme/1fl-3section.svg);">
						<a xlink:href="single-apartment.php" data-aprtment-name="1КП" data-aprtment-square="46,76">
							<path d="M 0.49115756,64.669113 201.65994,65.024086 201.52363,239.74783 0,239.78472 Z">
							</path>
						</a>
						<a xlink:href="single-apartment.php" data-aprtment-name="2КС" data-aprtment-square="65,77">
							<path d="m 413,1 -1.53682,194.23987 82.36632,0.12741 v 44.87597 l 146.84542,-0.12798 3.2e-4,-239.96585824 H 412.37942">
							</path>
						</a>
						<a xlink:href="single-apartment.php" data-aprtment-name="2КС" data-aprtment-square="74,93">
							<path d="M 426.63031,245.7086 426.42267,500.14301 641,500 640.67492,245.74228 Z">
							</path>
						</a>
						<a xlink:href="single-apartment.php" data-aprtment-name="1КС" data-aprtment-square="49,17">
							<path d="m 280.47918,245.70868 1.0787,255.00756 h 137.99517 l 1.48401,-255.00764 z">
							</path>
						</a>
						<a xlink:href="single-apartment.php" data-aprtment-name="2КС" data-aprtment-square="75,04">
							<path d="m 60.523473,245.70868 0.0031,254.43441 214.117167,-8e-5 0.24224,-254.43433 z">
							</path>
						</a>																		
					</svg>
					<div class="apartment-info-pop-up" id="apartment-info-pop-up">
						<span class="apartment-type-name"></span>
						<span class="apartment-square"><span class="apartment-square-value"></span> <span>м2</span></span>
					</div>
				</div>
				<div class="rose-of-wind-icon-container">
					<img src="img/apartment-scheme/rose-flat/rose-floor.png" alt="">
				</div>
				<ul class="floor-plan-legend-list">
					<li class="legend-1room">
						<span class="legend-color"></span>
						<span class="legend-value">1-комнатная</span>
					</li>
					<li class="legend-2room">
						<span class="legend-color"></span>
						<span class="legend-value">2-комнатная</span>
					</li>
<!-- 					<li class="legend-3room">
						<span class="legend-color"></span>
						<span class="legend-value">3-комнатная</span>
					</li> -->																	
				</ul>				
			</section>
		</div>
	</main>
<? include("footer.php") ?>		