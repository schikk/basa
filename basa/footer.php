	<!-- FEEDBACK FORM MODAL -->
		<div class="page-overlay"></div>
		<div class="feedback-form">
			<div class="close-modal-btn"></div>
			<div class="feedback-form-content">
				<form action="mails/callback-form.php" method="POST" id="feedback-form" class="side-form">
					<div class="modal-contacts-input-wrapper">
						<input type="text" name="user-name" id="user-name" autocomplete="off">
						<label for="user-name">Имя</label>
					</div>
					<div class="modal-contacts-input-wrapper">
						<input type="email" name="user-email" id="user-email" autocomplete="off">
						<label for="user-email">Email</label>
					</div>
					<div class="modal-contacts-input-wrapper">
						<input type="tel" name="user-tel" id="user-tel" autocomplete="off">
						<label for="user-tel">Номер телефона</label>
					</div>
					<input type="text" name="required" class="req-input">
					<button id="submit-btn" class="basa-btn" type="submit">Отправить</button>
				</form>
			</div>
			<div class="success-msg">
				<p>Спасибо за внимание! <br>Наш менеджер свяжется с вами в ближайшее время!</p>
			</div>
		</div>
	<!-- MAPS MODAL -->
	<div class="maps-container">
		<div id="map">
			<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBKqbrvha4p20QERUocxfrpfESrUarPZuQ" type="text/javascript"></script>				
		</div>
		<div class="modal-close-btn" role="button"></div>		
	</div>
	</body>
	<!-- MAIN JS -->
	<script src="js/libs/jquery-3.3.1.min.js"></script>
	<script src="js/libs/jquery-migrate-3.0.0.min.js"></script>
	<script src="js/libs/jquery.mobile.custom.min.js"></script>
	<script src="js/libs/jquery.stellar.min.js"></script>
	<script src="js/main.js"></script>
	<!-- SPECIFIC JS -->
	<?php
		$currentpage = $_SERVER['REQUEST_URI'];
		if ( $currentpage == '/' || $currentpage == '/basa/' || strpos( $currentpage, 'index.php' ) == true ) { ?>
			<!-- PAGE - FRONTPAGE -->
			<script src="js/specific/front-page.js"></script>
			<!-- PAGE - FRONTPAGE (END) -->
		<?php }
		if ( strpos( $currentpage, 'page-about.php' ) == true ) { ?>
			<!-- PAGE - ABOUT -->
			<script src="js/specific/about-page.js"></script>
			<!-- PAGE - ABOUT (END) -->
		<?php }
		if ( strpos( $currentpage, 'page-genplan.php' ) == true ) { ?>
			<!-- PAGE - APARTMENTS -->
			<script src="js/specific/genplan-page.js"></script>
			<!-- PAGE - APARTMENTS (END) -->
		<?php }
		if ( strpos( $currentpage, 'category-sections-floors.php' ) == true ) { ?>
			<!-- PAGE - SECTIONS-FLOORS -->
			<script src="js/specific/category-sections-floors.js"></script>
			<!--  PAGE - SECTIONS-FLOORS (END) -->
		<?php }		
		if ( strpos( $currentpage, 'category-apartments-filter.php' ) == true ) { ?>
			<!-- PAGE - FLATS FILTER -->
			<script src="js/libs/nativemultiple.jquery.min.js"></script>
			<script src="js/specific/filter-page.js"></script>
			<!-- PAGE - FLATS FILTER (END) -->
		<?php }
		if ( strpos( $currentpage, 'single-apartment.php' ) == true ) { ?>
			<!-- PAGE - SINGLE APARTMENT -->
			<script src="js/specific/single-apartment.js"></script>
			<!-- PAGE - SINGLE APARTMENT (END) -->
		<?php }
		if ( strpos( $currentpage, 'page-documents.php' ) == true ) { ?>
			<!-- PAGE - DOCUMENTS -->
			<script src="js/specific/docs-page.js"></script>
			<!-- PAGE - DOCUMENTS (END) -->
		<?php }
		if ( strpos( $currentpage, 'page-construction-news.php' ) == true ) { ?>
			<!-- PAGE - CONSTRUCTION NEWS -->
			<script
			src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="crossorigin="anonymous"></script>
			<script src="js/libs/jquery.circliful.min.js"></script>
			<script src="js/specific/construction-news-page.js"></script>
			<!-- PAGE - CONSTRUCTION NEWS (END) -->
		<?php }
		if ( strpos( $currentpage, 'page-webcams.php' ) == true ) { ?>
			<!-- PAGE - WEBCAMS -->
		  	<script src="js/libs/uppod-0.13.05.js"></script>
			<script src="js/specific/webcams-page.js"></script>
			<!-- PAGE - WEBCAMS (END) -->
		<?php }																
	?>
</html>