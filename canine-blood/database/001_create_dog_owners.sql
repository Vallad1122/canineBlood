CREATE DATABASE IF NOT EXISTS canine_blood;

USE canine_blood;

CREATE TABLE IF NOT EXISTS dog_owners (
  id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  mobile_number VARCHAR(10) NOT NULL,
  email VARCHAR(255) NOT NULL,
  home_address VARCHAR(255) NOT NULL,
  hashed_password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (id),
  UNIQUE KEY uq_dog_owners_email (email),
  KEY idx_dog_owners_mobile_number (mobile_number)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
