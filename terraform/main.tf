provider "aws" {
  profile = "chord-theory"
  region  = "us-east-1"
}

data "aws_iam_policy_document" "s3_bucket_policy" {
  statement {
    effect    = "Allow"
    actions   = ["s3:GetObject"]
    resources = ["arn:aws:s3:::js-chord-theory-website/*"]

    principals {
      identifiers = ["*"]
      type        = "AWS"
    }
  }
}

resource "aws_s3_bucket" "website_bucket" {
  bucket = "js-chord-theory-website"
  acl    = "public-read"
  policy = "${data.aws_iam_policy_document.s3_bucket_policy.json}"

  website {
    index_document = "index.html"
    error_document = "error.html"
  }
}

resource "aws_s3_bucket_object" "app_js" {
  bucket = "${aws_s3_bucket.website_bucket.bucket}"
  key    = "app.js"
  source = "../app.js"
  etag   = "${md5(file("../app.js"))}"

  content_type = "text/javascript"
}

resource "aws_s3_bucket_object" "index_html" {
  bucket = "${aws_s3_bucket.website_bucket.bucket}"
  key    = "index.html"
  source = "../index.html"
  etag   = "${md5(file("../index.html"))}"

  content_type = "text/html"
}
