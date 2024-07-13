# define provider
provider "aws" {
  region = "eu-west-2"
}


# create a private s3 bucket
# uploaded objects by aws cli
resource "aws_s3_bucket" "bucket1" {
  bucket = "terraform-mycafemenu"
}


# create an EC2 instance                  
resource "aws_instance" "web" {
  ami           = "ami-0b2287cff5d6be10f"
  instance_type = "t2.micro"
  key_name      = "mycafemenu"

  tags = {
    Name = "web"
  }
}


