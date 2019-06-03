#include <boost/asio.hpp>
#include <sstream>
#include <iostream>
#include <fstream>
using boost::asio::ip::tcp;

const int SIZE = 100000;

void run(tcp::socket socket) {
    char in[SIZE], out[SIZE];
    socket.read_some(boost::asio::buffer(in, SIZE));
    try{
        std::ofstream ofile;
        ofile.open("datain", std::ios::binary);
        ofile.write(in, SIZE);
        ofile.close();
        system("code << datain >> dataout");
        std::ifstream ifile;
        ifile.open("datain", std::ios::binary);
        ifile.read(out, SIZE);
        ifile.close();
        command(in, out);
    }
    socket.write_some(boost::asio::buffer(out, strlen(out)));
}

int main(int argc, char *argv[]) {
    if (argc != 2) {
        return 1;
    }
    unsigned short port = std::atoi(argv[1]);
    boost::asio::io_context io_context;
    tcp::acceptor acceptor(io_context, tcp::endpoint(tcp::v4(), port));
    for(;;) {
        run(acceptor.accept());
    }

    return 0;
}
