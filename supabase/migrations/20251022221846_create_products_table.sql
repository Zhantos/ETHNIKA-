/*
  # Create Products Table for Virtual Store

  ## Overview
  This migration creates the core products table for an e-commerce store with support for product images, pricing, and inventory management.

  ## New Tables
  
  ### `products`
  - `id` (uuid, primary key) - Unique identifier for each product
  - `name` (text, required) - Product name
  - `description` (text, required) - Detailed product description
  - `price` (decimal, required) - Product price with 2 decimal precision
  - `image_url` (text, required) - URL to product image
  - `category` (text, required) - Product category for organization
  - `stock` (integer, required) - Available inventory quantity
  - `created_at` (timestamptz) - Timestamp when product was added
  - `updated_at` (timestamptz) - Timestamp of last update

  ## Security
  
  ### Row Level Security
  - RLS is enabled on the products table
  - **Public Read Access**: Anyone can view products (essential for e-commerce)
  - **Authenticated Write Access**: Only authenticated users can create, update, or delete products (admin functionality)

  ## Notes
  1. The products table uses public read access since customers need to browse products
  2. Write operations are restricted to authenticated users (store administrators)
  3. Prices are stored as DECIMAL(10,2) for accurate monetary calculations
  4. Stock tracking is included for inventory management
  5. Timestamps track when products are added and modified
*/

-- Create products table
CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  price decimal(10,2) NOT NULL CHECK (price >= 0),
  image_url text NOT NULL,
  category text NOT NULL,
  stock integer NOT NULL DEFAULT 0 CHECK (stock >= 0),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Allow anyone to view products (public read access for storefront)
CREATE POLICY "Anyone can view products"
  ON products
  FOR SELECT
  USING (true);

-- Only authenticated users can insert products (admin functionality)
CREATE POLICY "Authenticated users can create products"
  ON products
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

-- Only authenticated users can update products
CREATE POLICY "Authenticated users can update products"
  ON products
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Only authenticated users can delete products
CREATE POLICY "Authenticated users can delete products"
  ON products
  FOR DELETE
  TO authenticated
  USING (true);

-- Create index for faster category filtering
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);

-- Create index for price range queries
CREATE INDEX IF NOT EXISTS idx_products_price ON products(price);

-- Create trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_products_updated_at
  BEFORE UPDATE ON products
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();