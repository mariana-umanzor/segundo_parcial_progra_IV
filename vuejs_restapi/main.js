function ObtenerArticulos()
{
	axios.get('http://localhost:8080/articulos')
	  .then(function (response) {
		console.log(response);
	  })
	  .catch(function (error) {
		console.log(error);
	  })
	  .then(function () {
	  });
}

function ObtenerItemPorId()
{
	axios.get('http://localhost:8080/articulos', {
		params: {
			filter : 'myFilter'
		}
	  })
	  .then(function (response) {
		console.log(response);
	  })
	  .catch(function (error) {
		console.log(error);
	  })
	  .then(function () {
	  });
}

function ObtenerPorNombre()
{
	id = 10;
	axios.get('http://localhost:8080/articulos/' + id)
	  .then(function (response) {
		console.log(response);
	  })
	  .catch(function (error) {
		console.log(error);
	  })
	  .then(function () {
	  });
}

function CrearItem()
{
	axios.post('http://localhost:8080/articulos', {
		data: 'NuevoArticulo'
	  })
	  .then(function (response) {
		console.log(response);
	  })
	  .catch(function (error) {
		console.log(error);
	  })
	  .then(function () {
	  });
}

function ActualizarItem()
{
	id = 10;
	axios.put('http://localhost:8080/articulos/' + id, {
		data: 'NuevoArticulo'
	  })
	  .then(function (response) {
		console.log(response);
	  })
	  .catch(function (error) {
		console.log(error);
	  })
	  .then(function () {
	  });
}

function patchRequest()
{
	id = 10;
	axios.patch('http://localhost:8080/articulos/' + id, {
		data: 'NuevoArticulo'
	  })
	  .then(function (response) {
		console.log(response);
	  })
	  .catch(function (error) {
		console.log(error);
	  })
	  .then(function () {
	  });
}

function BorrarItem()
{
	id = 10;
	axios.delete('http://localhost:8080/articulos/' + id)
	  .then(function (response) {
		console.log(response);
	  })
	  .catch(function (error) {
		console.log(error);
	  })
	  .then(function () {
	  });
}
