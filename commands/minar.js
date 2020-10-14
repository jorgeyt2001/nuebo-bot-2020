if (command === 'minar') {
	let texto = args.join(' ').toLowerCase();
		
	let opt = texto.split(' ');
	if(!texto){
		dg.economia.verMonedas(message.author.id, (monedas) =>{
			if (monedas.cantidad < 10) {
				message.channel.send('Tiene pocas monedas, no te alcanzan.')
			} else {
				let random = Math.floor(Math.random() * 8) + 1;
				if (random === 1) {
					dg.economia.verTienda('minar', (item) => {
						if ('diamante' === item.nombre) {
								dg.economia.verInventario(message.author.id, 'minar', (uitem) => {
									if (uitem) {
										if ('diamante' === uitem.nombre) {
											dg.economia.editItemDeInventario(message.author.id, 'minar', 'diamante', 1)
											dg.economia.editMonedas(message.author.id, -10, (nCantidad) => {

											})
										}
									}
								});
								dg.economia.agregarItemsAInventario(message.author.id, 'minar', 'minar', {
									nombre: 'diamante'
								}, (resp) => {
									if (resp) {
										dg.economia.editMonedas(message.author.id, -10, (nCantidad) => {
											
										})
									}
								})
							}
						})
					message.channel.send(':hammer_pick: minaste: :gem: pagaste :moneybag: **10** por el intento.');
				
				} else if (random === 2 || random === 3) {
					dg.economia.verTienda('minar', (item) => {
						if ('oro' === item.nombre) {
							dg.economia.verInventario(message.author.id, 'minar', (uitem) => {
								if (uitem) {
									if ('oro' === uitem.nombre) {
										dg.economia.editItemDeInventario(message.author.id, 'minar', 'oro', 1)
										dg.economia.editMonedas(message.author.id, -10, (nCantidad) => {

										})
									}
								}	
							})
							dg.economia.agregarItemsAInventario(message.author.id, 'minar', 'minar', {
								nombre: 'oro'
							}, (resp) => {
								if (resp) {
									dg.economia.editMonedas(message.author.id, -10, (nCantidad) => {

									})

								}
							})
						}
					})
					message.channel.send(':hammer_pick: minaste: :large_orange_diamond: pagaste :moneybag: **10** por el intento.');
				} else {
					dg.economia.verTienda('minar', (item) => {
						if ('piedra' === item.nombre) {
							dg.economia.verInventario(message.author.id, 'minar', (uitem) => {
								if(uitem){
									if ('piedra' === uitem.nombre) {
										dg.economia.editItemDeInventario(message.author.id, 'minar', 'piedra', 1)
										dg.economia.editMonedas(message.author.id, -10, (nCantidad) => {

										})
									}
								}	
							})
							dg.economia.agregarItemsAInventario(message.author.id, 'minar', 'minar', {
								nombre: 'piedra'
							}, (resp) => {
								if (resp) {
									dg.economia.editMonedas(message.author.id, -10, (nCantidad) => {
											
									})

								}
							})

						}
					})
					message.channel.send(':hammer_pick: minaste: :waxing_crescent_moon: pagaste :moneybag: **10** por el intento.');
				
				}
			}

		})	
	} else
	if (opt[0] === 'tienda') {
		let embed = new Discord.RichEmbed()
		dg.economia.verTienda('minar', (item) => {
			if (item) {
				embed.addField(item.nombre, 'Precio: ' + item.precio)

			} else {
				return message.channel.send('La tienda esta vacia.');
			}
		});
		setTimeout(() => {
			message.channel.send(embed);
		}, 1000)
		
	} else if (opt[0] === 'vender') {
		if (!opt[1]) return message.channel.send('Ingrese el nombre del item a vender');
			
		dg.economia.verTienda('minar', (item) => {
			if (opt[1] === item.nombre) {
				dg.economia.verInventario(message.author.id, 'minar', (uitem) => {
					if (uitem) {
						if (opt[1] === uitem.nombre) {
							let total = item.precio * uitem.cantidad;
							
							dg.economia.editItemDeInventario(message.author.id, 'minar', opt[1], -uitem.cantidad)		
							dg.economia.editMonedas(message.author.id, total, (nCantidad) => {
								message.channel.send('Item ' + item.nombre + ' vendido correctamente, ahora tienes '+ nCantidad+ ' monedas.');
							})			
						}
					}
				});
				dg.economia.agregarItemsAInventario(message.author.id, 'minar', 'minar', {
					nombre: opt[1]
				}, (resp) => {
					if (resp) {
						dg.economia.editMonedas(message.author.id, 0, (nCantidad) => {
						})
					}
				})
			}
		})
		
	} else if (opt[0] === 'inventario') {
		let embed = new Discord.RichEmbed()
		embed.setTitle('Tu inventario de minerales:')
		dg.economia.verInventario(message.author.id, 'minar', (item) => {
			if (item) {
				embed.addField(item.nombre, 'Cantidad: ' + item.cantidad)

			} else {
				message.channel.send('No tienes ningun item en tu inventario.')
				
			}
		})
		setTimeout(() => {
			message.channel.send(embed)
		}, 1000)
	}

}