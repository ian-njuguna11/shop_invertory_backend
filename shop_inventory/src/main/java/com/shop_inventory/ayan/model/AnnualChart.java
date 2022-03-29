package com.shop_inventory.ayan.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "AnnualChart")
public class AnnualChart {
    @Id
    @Column(name = "id", nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    //first quarter
    private Integer JAN;
    private Integer FEB;
    private Integer MAR;
    private Integer APR;

//    private Integer MAY;
//    private Integer JUN;
//    private Integer JUL;
//    private Integer AUG;
//
//    private Integer OCT;
//    private Integer NOV;
//    private Integer DEC;
}
