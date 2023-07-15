package net.javaguides.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.Mobile;

@Repository
public interface MobileRepository extends JpaRepository<Mobile, Long>{

}
// jpa repository basically exposes database code methods like save delete
// mobile is jpa entity