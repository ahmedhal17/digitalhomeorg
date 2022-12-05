-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.

-- Modify this code to update the DB schema diagram.
-- To reset the sample schema, replace everything with
-- two dots ('..' - without quotes).

SET XACT_ABORT ON

BEGIN TRANSACTION QUICKDBD

CREATE TABLE [Customer] (
    [CustomerID] int  NOT NULL ,
    [Name] string  NOT NULL ,
    [Address1] string  NOT NULL ,
    [Address2] string  NULL ,
    [Address3] string  NULL ,
    CONSTRAINT [PK_Customer] PRIMARY KEY CLUSTERED (
        [CustomerID] ASC
    )
)

CREATE TABLE [Order] (
    [OrderID] int  NOT NULL ,
    [CustomerID] int  NOT NULL ,
    [TotalAmount] money  NOT NULL ,
    [OrderStatusID] int  NOT NULL ,
    CONSTRAINT [PK_Order] PRIMARY KEY CLUSTERED (
        [OrderID] ASC
    )
)

CREATE TABLE [OrderLine] (
    [OrderLineID] int  NOT NULL ,
    [OrderID] int  NOT NULL ,
    [ProductID] int  NOT NULL ,
    [Quantity] int  NOT NULL ,
    CONSTRAINT [PK_OrderLine] PRIMARY KEY CLUSTERED (
        [OrderLineID] ASC
    )
)

-- Table documentation comment 1 (try the PDF/RTF export)
-- Table documentation comment 2
CREATE TABLE [Product] (
    [ProductID] int  NOT NULL ,
    -- Field documentation comment 1
    -- Field documentation comment 2
    -- Field documentation comment 3
    [Name] varchar(200)  NOT NULL ,
    [Price] money  NOT NULL ,
    CONSTRAINT [PK_Product] PRIMARY KEY CLUSTERED (
        [ProductID] ASC
    ),
    CONSTRAINT [UK_Product_Name] UNIQUE (
        [Name]
    )
)

CREATE TABLE [OrderStatus] (
    [OrderStatusID] int  NOT NULL ,
    [Name] string  NOT NULL ,
    CONSTRAINT [PK_OrderStatus] PRIMARY KEY CLUSTERED (
        [OrderStatusID] ASC
    ),
    CONSTRAINT [UK_OrderStatus_Name] UNIQUE (
        [Name]
    )
)

ALTER TABLE [Order] WITH CHECK ADD CONSTRAINT [FK_Order_CustomerID] FOREIGN KEY([CustomerID])
REFERENCES [Customer] ([CustomerID])

ALTER TABLE [Order] CHECK CONSTRAINT [FK_Order_CustomerID]

ALTER TABLE [Order] WITH CHECK ADD CONSTRAINT [FK_Order_OrderStatusID] FOREIGN KEY([OrderStatusID])
REFERENCES [OrderStatus] ([OrderStatusID])

ALTER TABLE [Order] CHECK CONSTRAINT [FK_Order_OrderStatusID]

ALTER TABLE [OrderLine] WITH CHECK ADD CONSTRAINT [FK_OrderLine_OrderID] FOREIGN KEY([OrderID])
REFERENCES [Order] ([OrderID])

ALTER TABLE [OrderLine] CHECK CONSTRAINT [FK_OrderLine_OrderID]

ALTER TABLE [OrderLine] WITH CHECK ADD CONSTRAINT [FK_OrderLine_ProductID] FOREIGN KEY([ProductID])
REFERENCES [Product] ([ProductID])

ALTER TABLE [OrderLine] CHECK CONSTRAINT [FK_OrderLine_ProductID]

CREATE INDEX [idx_Customer_Name]
ON [Customer] ([Name])

COMMIT TRANSACTION QUICKDBD