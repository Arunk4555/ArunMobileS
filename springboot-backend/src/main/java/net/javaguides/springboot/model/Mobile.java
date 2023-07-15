package net.javaguides.springboot.model;

import jakarta.persistence.*;

@Entity // JPA annoation to map relational database table
@Table(name = "mobiles")
public class Mobile {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "product")
	private String product;

	@Column(name = "Description")
	private String Description;
	
	@Column(name = "stock")
	private String Stock;
	 
	@Column(name="link")
	private String link;
	
	public Mobile() {
		
	}
	

	public Mobile(String product, String description, String stock) {
		super();
		this.product = product;
		Description = description;
		Stock = stock;
		link=link;
	}


	public String getLink() {
		return link;
	}


	public void setLink(String link) {
		this.link = link;
	}


	public String getStock() {
		return Stock;
	}


	public void setStock(String stock) {
		Stock = stock;
	}


	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getProduct() {
		return product;
	}

	public void setProduct(String product) {
		this.product = product;
	}

	public String getDescription() {
		return Description;
	}

	public void setDescription(String description) {
		Description = description;
	}

	
}
	
	