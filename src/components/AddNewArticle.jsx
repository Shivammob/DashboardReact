import React from "react";
import ArticleEditorsTab from "./tab/ArticleEditorsTab";
import { Card, Col, Container, Form, Row } from "react-bootstrap";

function AddNewArticle() {
  return (
    <main>
      <section>
        <Container fluid>
          <Row>
            <Col>
              <div className="editors">
                <ArticleEditorsTab />
                <div className="add-article mb-4">
                  <Card>
                    <Card.Body>
                      <h2 className="font-22 font-600 mb-4 pb-md-2">
                        Add New Article
                      </h2>
                      <Form className="add-article-form">
                        <Row>
                          <Col sm={6}>
                            <Form.Group className="mb-4">
                              <Form.Label htmlFor="title">Title</Form.Label>
                              <Form.Control
                                as="textarea"
                                placeholder="Enter Title"
                                id="title"
                                style={{ height: "90px" }}
                              />
                            </Form.Group>
                          </Col>
                          <Col sm={6}>
                            <Form.Group className="mb-4">
                              <Form.Label htmlFor="imageUrl">
                                Title Image URL
                              </Form.Label>
                              <Form.Control
                                as="textarea"
                                placeholder="Enter url"
                                id="imageUrl"
                                style={{ height: "90px" }}
                              />
                            </Form.Group>
                          </Col>
                          <Col sm={6}>
                            <Form.Group className="mb-4">
                              <Form.Label htmlFor="description1">
                                Description 1
                              </Form.Label>
                              <Form.Control
                                as="textarea"
                                placeholder="Enter Description 1"
                                id="description1"
                                style={{ height: "160px" }}
                              />
                            </Form.Group>
                          </Col>
                          <Col sm={6}>
                            <Form.Group className="mb-4">
                              <Form.Label htmlFor="description2">
                                Description 2
                              </Form.Label>
                              <Form.Control
                                as="textarea"
                                placeholder="Enter Description 2"
                                id="description2"
                                style={{ height: "160px" }}
                              />
                            </Form.Group>
                          </Col>
                          <Col md={12}>
                            <Form.Group className="mb-4">
                              <Form.Label htmlFor="pageUrl">
                                Page URL
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Enter url"
                                id="pageUrl"
                              />
                            </Form.Group>
                          </Col>
                          <Col sm={6}>
                            <Form.Group className="mb-4">
                              <Form.Label htmlFor="categories">
                                Categories
                              </Form.Label>
                              <Form.Select
                                id="categories"
                                aria-label="categories"
                              >
                                <option>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col sm={6}>
                            <Form.Group className="mb-4">
                              <Form.Label htmlFor="author">Author</Form.Label>
                              <Form.Select id="author" aria-label="author">
                                <option>Select</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                              </Form.Select>
                            </Form.Group>
                          </Col>
                          <Col sm={6}>
                            <Form.Group className="mb-4">
                              <Form.Label htmlFor="userId">User Id</Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Enter User Id"
                                id="userId"
                              />
                            </Form.Group>
                          </Col>
                          <Col sm={6}>
                            <Form.Group className="mb-4">
                              <Form.Label htmlFor="totalComments">
                                Total Comments
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Enter Total Comments"
                                id="totalComments"
                              />
                            </Form.Group>
                          </Col>
                          <Col sm={6}>
                            <Form.Group className="mb-4">
                              <Form.Label htmlFor="readTime">
                                Read Time
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Enter Read Time"
                                id="readTime"
                              />
                            </Form.Group>
                          </Col>
                          <Col sm={6}>
                            <Form.Group className="mb-4">
                              <Form.Label htmlFor="totalViews">
                                Total Views
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Enter Total Views"
                                id="totalViews"
                              />
                            </Form.Group>
                          </Col>
                          <Col sm={6}>
                            <Form.Group className="mb-4">
                              <Form.Label htmlFor="metaTitle">
                                Meta Title
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Enter Meta Title"
                                id="metaTitle"
                              />
                            </Form.Group>
                          </Col>
                          <Col sm={6}>
                            <Form.Group className="mb-4">
                              <Form.Label htmlFor="metaDesc">
                                Meta Description
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Enter Meta Description"
                                id="metaDesc"
                              />
                            </Form.Group>
                          </Col>
                          <Col sm={6}>
                            <Form.Group className="mb-4">
                              <Form.Label htmlFor="metaKeyword">
                                Meta Keywords
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="Enter Meta Keywords"
                                id="metaKeyword"
                              />
                            </Form.Group>
                          </Col>
                          <Col sm={6}>
                            <Form.Group className="mb-4">
                              <Form.Label htmlFor="publishDate">
                                Publish Date
                              </Form.Label>
                              <Form.Control
                                type="text"
                                placeholder="mm/dd/yyyy"
                                id="publishDate"
                              />
                            </Form.Group>
                          </Col>
                          <Col sm={6} className="mb-4">
                            <a
                              href="#"
                              onClick={(e) => e.preventDefault()}
                              className="btn outline-btn w-100"
                            >
                              Back
                            </a>
                          </Col>
                          <Col sm={6} className="mb-4">
                            <a
                              href="#"
                              onClick={(e) => e.preventDefault()}
                              className="btn primarybtn w-100"
                            >
                              Publish
                            </a>
                          </Col>
                        </Row>
                      </Form>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
}

export default AddNewArticle;
