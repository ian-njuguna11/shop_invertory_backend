package com.shop_inventory.ayan.repository;

import com.shop_inventory.ayan.model.AnnualChart;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AnnualChartRepository extends JpaRepository<AnnualChart, Long> {

}
