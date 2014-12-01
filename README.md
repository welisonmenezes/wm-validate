wm-validate
===========

Plugin jQuery para validação de formulários

## Instalação

    <pre>
        <!--  jQuery 1.7+  -->
        <script src="assets/js/jquery-1.9.1.min.js"></script>
 
        <!-- Include js plugin -->
        <script src="wm-validate/jquery.wm-validate-1.0.min.js"></script>
    </pre>

## O Html

Inputs em geral, textarea e select devem estar em um container junto com o elemento que receberá a mensagem de error.
Botões checkbox e radio devem estar em um label, que por sua vez deve estar em um container junto com o elemento que receberá a mensagem de error.
Exemplo:

    <pre>
	<form action="#">
		<div>
			<label>Inputs em geral e textarea</label>
			<input type="text" class="required">
			<span class="msg-error"></span>
		</div>

		<div>
			<label>require in checkbox</label>
			<br>
			<label>
				<input type="checkbox" name="t_checkbox" class="required" value="um">
				valor um
			</label>
			<br>
			<label>
				<input type="checkbox" name="t_checkbox" class="required" value="dois">
				valor dois
			</label>
			<br>
			<span class="msg-error"></span>
		</div>

		<div>
			<label>require in select box</label>
			<select name="t_select" class="required">
				<option value="">-selecione-</option>
				<option value="um">valor um</option>
				<option value="dois">valor dois</option>
			</select>
			<span class="msg-error"></span>
		</div>
	</form>
    <pre>

## Chamando o Plugin

    <pre>
        <script type="text/javascript">
	    $(document).ready(function(){
	        $('form').wmValidate();
	    });
        </script>
    </pre>