package org.iesvdm.videoclub.repository;

import org.iesvdm.videoclub.domain.Categoria;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CategoriaRepository extends JpaRepository<Categoria,Long> {

    public List<Categoria> findByNombreContainingIgnoreCase(String nombre);

    public List<Categoria> findByNombreContainingIgnoreCaseOrderByNombreAsc(String nombre);

    public List<Categoria> findByNombreContainingIgnoreCaseOrderByNombreDesc(String nombre);

    public List<Categoria> findAllByOrderByNombreAsc();

    public List<Categoria> findAllByOrderByNombreDesc();

    @Query(value = "select Count(PC.idPelicula) from Categoria C left join C.peliculas PC group by C.idCategoria")
    public List<Integer> queryCategoriaConteoPeliculas();

    public Page<Categoria> findByNombreContainingIgnoreCase(String nombre, Pageable pageable);

    @Query(value = "Select C from Categoria C where C.nombre like %?1%"
        ,countQuery = "select count(C) from Categoria C where C.nombre like %?1%")
    public Page<Categoria> queryJPQLBuscarCategoria(String nombreBuscar, Pageable pageable);

    @Query(value = "select from categoria where nombre like %?1%"
        , countQuery = "select count() from categoria where nombre like %?1%"
    ,nativeQuery = true)
    public Page<Categoria> queryBuscarCategoria(String nombreBuscar, Pageable pageable);


}
