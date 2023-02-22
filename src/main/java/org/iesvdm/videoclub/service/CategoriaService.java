package org.iesvdm.videoclub.service;

import org.iesvdm.videoclub.domain.Categoria;
import org.iesvdm.videoclub.exception.CategoriaNotFoundException;
import org.iesvdm.videoclub.repository.CategoriaRepository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class CategoriaService {

    private final CategoriaRepository categoriaRepository;

    public CategoriaService(CategoriaRepository categoriaRepository) {
        this.categoriaRepository = categoriaRepository;
    }

    public List<Categoria> all() {
        return this.categoriaRepository.findAll();
    }

    public List<Categoria> allFiltro(Optional<String> buscarOptional, Optional<String> ordenarOptional) {

        List<Categoria> listaCategorias = new ArrayList<>();
        if(buscarOptional.isPresent() && ordenarOptional.isEmpty()) {
            listaCategorias = this.categoriaRepository.findByNombreContainingIgnoreCase(buscarOptional.get());
        } else if (buscarOptional.isPresent() && ordenarOptional.isPresent() && ordenarOptional.get().equals("asc")) {
            listaCategorias = this.categoriaRepository.findByNombreContainingIgnoreCaseOrderByNombreAsc(buscarOptional.get());
        } else if (buscarOptional.isPresent() && ordenarOptional.isPresent() && ordenarOptional.get().equals("desc")) {
            listaCategorias = this.categoriaRepository.findByNombreContainingIgnoreCaseOrderByNombreDesc(buscarOptional.get());
        } else if (buscarOptional.isEmpty() && ordenarOptional.isPresent() && ordenarOptional.get().equals("desc")) {
            listaCategorias = this.categoriaRepository.findAllByOrderByNombreDesc();
        } else if (buscarOptional.isEmpty() && ordenarOptional.isPresent() && ordenarOptional.get().equals("asc")) {
            listaCategorias = this.categoriaRepository.findAllByOrderByNombreAsc();
        } else {
            //listaCategorias = this.categoriaRepository.findAll();
        }
        return listaCategorias;
    }

    public Categoria save(Categoria categoria) {
        return this.categoriaRepository.save(categoria);
    }

    public Categoria one(Long id) {
        return this.categoriaRepository.findById(id)
                .orElseThrow(() -> new CategoriaNotFoundException(id));
    }

    public Categoria replace(Long id, Categoria categoria) {

        return this.categoriaRepository.findById(id).map( p -> (id.equals(categoria.getIdCategoria())  ?
                        this.categoriaRepository.save(categoria) : null))
                .orElseThrow(() -> new CategoriaNotFoundException(id));

    }

    public void delete(Long id) {
        this.categoriaRepository.findById(id).map(p -> {this.categoriaRepository.delete(p);
                    return p;})
                .orElseThrow(() -> new CategoriaNotFoundException(id));
    }

    public List<Integer> conteo() {
        return this.categoriaRepository.queryCategoriaConteoPeliculas();
    }
}
