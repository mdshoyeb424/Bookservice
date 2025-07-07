export const getBookColumns = (handleEdit, handleDelete) => [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Author',
    dataIndex: 'author',
    key: 'author',
  },
  {
    title: 'Genre',
    dataIndex: 'genre',
    key: 'genre',
  },
  {
    title: 'Year',
    dataIndex: 'year',
    key: 'year',
  },
  {
    title: 'Actions',
    key: 'actions',
    render: (text, record) => (
      <div>
        <button className="btn btn-warning" onClick={() => handleEdit(record)}>Edit</button>
        <button className="btn btn-danger ms-4" onClick={() => handleDelete(record.id)}>Delete</button>
      </div>
    ),
  },
];
