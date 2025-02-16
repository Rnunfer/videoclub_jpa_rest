package org.iesvdm.videoclub.domain;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.NaturalId;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "categoria")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
@EqualsAndHashCode(of = "idCategoria")
public class Categoria {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_categoria")
    private long idCategoria;
    private String nombre;

    @ManyToMany(
            mappedBy = "categorias", fetch = FetchType.EAGER)
    @JsonIgnore
    Set<Pelicula> peliculas = new HashSet<>();

    @Column(name = "ultima_actualizacion")
    @JsonFormat(pattern = "yyyy-MM-dd-HH:mm:ss",  shape = JsonFormat.Shape.STRING)
    private Date ultimaActualizacion;

    public Long getIdCategoria() {
        return idCategoria;
    }
}