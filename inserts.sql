select * from pelicula_categoria;
select * from pelicula;
select * from idioma;
select * from categoria;
select C.*, Count(PC.id_pelicula) from categoria C left join pelicula_categoria PC on C.id_categoria = PC.id_categoria group by C.id_categoria;

insert into idioma values (1, "español", null);
insert into idioma values (2, "inglés", null);
insert into idioma values (3, "francés", null);

insert into pelicula (id_pelicula, anyo_lanzamiento, caracteristicas_especiales, clasificacion, descripcion, duracion, duracion_alquiler, rental_rate, replacement_cost, titulo, ultima_actualizacion, id_idioma, id_idioma_original) values (1, null, null, null, "La mejor película del año", 90, 3, 8, 25, "Ultrapelicula", null, 1, 1);
insert into pelicula (id_pelicula, anyo_lanzamiento, caracteristicas_especiales, clasificacion, descripcion, duracion, duracion_alquiler, rental_rate, replacement_cost, titulo, ultima_actualizacion, id_idioma, id_idioma_original) values (2, null, null, null, "Otra película", 95, 3, 9, 35, "Meh Pelicula", null, 2, 2);

insert into pelicula_categoria values (1, 1);
insert into pelicula_categoria values (1, 2);
insert into pelicula_categoria values (2, 2);